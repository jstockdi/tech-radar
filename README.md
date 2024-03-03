Welcome to the Tech Radar Repository.   Each radar contains notes on a particular theme.

[Figma Diagram](https://www.figma.com/file/A78p5OBN3AdqfMKmJusvqg/Tech-Radar?type=whiteboard&node-id=0-1&t=WvuQkiUkeqkgHOIP-0) contains a visualization of the properties


# Summary

In  product development, currently interested in the swing away from Agile dogma / weaponization and tooling to help teams collaborate.

[Whimsical](Whimsical.md) appears interesting as it is trying to become the "IDE" of product teams.  ie, shift from using many different bespoke tools scattered across different technologies/folders and provide good-enough tools together.  By bringing artifacts together, the narrative across roles is more transparent and connected.  ie, designs, business workflows, architecture diagrams are more connected.

[[Arcade]] and [[Storylane]] are demo platforms designed to help sales teams with prospective conversations.  



# Blip Format

Future proofing (to be turned into a webapp), the blips are in the following format:

```
----
 ring:  assess, trail, adopt, hold
 quadrant:  platform, technique, tool, framework
----

<Title>.md          # Title in blip on the radar

First paragraph     # Appear as tooltips / quick view

Second paragraph    # Appears on the details pages
```


# Prompt to create radar.js

```
Generate a node script that reads a directory for `*.md` files and builds a `radar.json` files

The radar.json file has the following format:

```
[
  {
    "name": "Babel",
    "ring": "adopt",
    "quadrant": "tools",
    "isNew": "TRUE",
    "description": "test"
  },
  {
    "name": "Apache Kafka",
    "ring": "trial",
    "quadrant": "languages & frameworks",
    "isNew": "FALSE",
    "description": "test"
  },
  {
    "name": "Android-x86",
    "ring": "assess",
    "quadrant": "platforms",
    "isNew": "TRUE",
    "description": "test"
  },
  {
    "name": "GrapCloud lift and shifthQL",
    "ring": "hold",
    "quadrant": "techniques",
    "isNew": "FALSE",
    "description": "test"
  }
]

```

Build each item in the json list from the following:

* "name" - the name of the .md file
* "ring" - parse from the markdown front-matter
* "quadrant" - parse from the markdown front-matter
* "isNew" - parse from the markdown front-matter
* "description" - Use the markdown text, wrapping each paragraph in "<p>" HTML elements
```