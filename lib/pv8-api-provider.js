'use babel';

// data source is a simple array of strings
import suggestions from '../data/pv8-api-reference';

class AdvancedProvider {
	constructor() {

		// offer suggestions only when editing plain text or HTML files
		this.selector = '.source.lua'

		// except when editing a comment within an HTML file
	  this.disableForSelector = '.source.lua .comment, .source.lua .string'

		// make these suggestions appear above default suggestions
		this.inclusionPriority = 1
	  this.excludeLowerPriority = true

	}

	getSuggestions(options) {
		const { editor, bufferPosition } = options;

		// getting the prefix on our own instead of using the one Atom provides
		let prefix = this.getPrefix(editor, bufferPosition);

		if (prefix.length >= 3) {
			return this.findMatchingSuggestions(prefix);
		}
	}

	getPrefix(editor, bufferPosition) {

		// the prefix normally only includes characters back to the last word break
		// which is problematic if your suggestions include punctuation (like "@")
		// this expands the prefix back until a whitespace character is met
		// you can tweak this logic/regex to suit your needs
		let line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition]);
		let match = line.match(/\S+$/);
		return match ? match[0] : '';
	}

	findMatchingSuggestions(prefix) {

		// filter json (list of suggestions) to those matching the prefix
		let matchingSuggestions = suggestions.filter((suggestion) => {
			return suggestion.displayText.startsWith(prefix);
		});

		// bind a version of inflateSuggestion() that always passes in prefix
		// then run each matching suggestion through the bound inflateSuggestion()
		let inflateSuggestion = this.inflateSuggestion.bind(this, prefix);
		let inflatedSuggestions = matchingSuggestions.map(inflateSuggestion);

		return inflatedSuggestions;

	}

	// clones a suggestion object to a new object with some shared additions
	// cloning also fixes an issue where selecting a suggestion won't insert it
	inflateSuggestion(replacementPrefix, suggestion) {
		return {
			displayText: suggestion.displayText,
			snippet: suggestion.snippet,
			description: suggestion.description,
			type: suggestion.type,
			rightLabel: suggestion.rightLabel,
			replacementPrefix: replacementPrefix,
		};
	}

	onDidInsertSuggestion(options) {
		//atom.notifications.addSuccess(options.suggestion.displayText + ' was inserted.');
	}
}
export default new AdvancedProvider();
