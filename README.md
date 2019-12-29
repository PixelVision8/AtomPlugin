## What is Pixel Vision 8

PV8's core philosophy is to teach retro game development with streamlined workflows. It enables designing games around limited resolutions, colors, sprites, sound and memory. It is ideal for game jams, prototyping ideas or having fun.

While Pixel Vision OS’s built-in text editor is good for simple coding, the ideal way to make PV8 games is with an external code editor. Atom ([https://atom.io](https://atom.io)) is a great, lightweight code editor that works perfectly with Pixel Vision 8 external tool workflow. Before you open your game’s Lua files in Atom, you will want to add a few packages.

## Plugin Features

This plugin was designed to add autocomplete and other features for using the [Atom Editor](https://atom.io/) with [Pixel Vision 8](https://pixelvision8.com).

* Auto complete for Pixel Vision 8's Lua APIs.
* Auto complete for the Pixel Vision OS's UI framework (coming soon)
* Code templates (coming soon)

## Getting Started
The first package to install is Pixel Vision 8’s own API autocomplete. You do this by going to Atom’s settings, then select the install tab. From there type in `pixel-vision-8` and search for the package.

<p style="text-align:center"><img src="http://tutorials.pixelvision8.com/wp-content/uploads/2019/12/UsingAtom_image_0.png" /></p>

Once installed, you will be able to get PV8 code completion in any `.lua` file you work on in the editor.

<p style="text-align:center"><img src="http://tutorials.pixelvision8.com/wp-content/uploads/2019/12/UsingAtom_image_1.png" /></p>

Just start typing out the first few letters of an API and the autocomplete drop-down will give you the options to choose from. Each listing has a detailed description of what the API does and offers an autocomplete template allowing you to tab through each of the parameters once you add the code snippet to your project.

Another advantage of installing the PV8 Atom package is that you can keep it up to date with each release. This allows you to have the latest API autocomplete definitions without having to dig through the documentation to see the latest changes.

You will also want to install a good Lua package if you have not done so already. I use `language-lua` by FireZenk.

<p style="text-align:center"><img src="http://tutorials.pixelvision8.com/wp-content/uploads/2019/12/UsingAtom_image_2.png" /></p>

Once you have everything set up, you can open any PV8 disk or project folder with Atom. You’ll see the entire file structure of the project and can begin making changes to any of the Lua or JSON files.

![image alt text](http://tutorials.pixelvision8.com/wp-content/uploads/2019/12/UsingAtom_image_3.png)

When you make changes to your code in Atom, simply press `CTRL + 4` in Pixel Vision 8 to reload the game.

## Credits

Pixel Vision 8 was created by Jesse Freeman ([@jessefreeman](http://twitter.com/jessefreeman)) in collaboration with Christina-Antoinette Neofotistou ([@CastPixel](http://twitter.com/CastPixel)), Pedro Medeiros ([@saint11](http://twitter.com/saint11)) for art and Christer Kaitila ([@McFunkypants](http://twitter.com/McFunkypants)) for music. With additional coding contributions by Shawn Rakowski ([@shwany](http://twitter.com/shwany)).

## License

Licensed under the [Microsoft Public License (MS-PL) License](https://opensource.org/licenses/MS-PL).  See LICENSE file in the project root for full license information.

Pixel Vision 8 is Copyright (c) 2017 Jesse Freeman. All rights reserved.
