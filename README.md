Welcome to the Tech Radar Obsidian, which uses the thoughtworks tech radar to render the markdown files.

Access the latest [Tech Radar](https://radar.thoughtworks.com/?documentId=https%3A%2F%2Fjstockdi.github.io%2Ftech-radar%2Fradar.json)


# Latest Thoughts

In  product development, currently interested in the swing away from Agile dogma / weaponization and tooling to help teams collaborate.

[Whimsical](Whimsical.md) appears interesting as it is trying to become the "IDE" of product teams.  ie, shift from using many different bespoke tools scattered across different technologies/folders and provide good-enough tools together.  By bringing artifacts together, the narrative across roles is more transparent and connected.  ie, designs, business workflows, architecture diagrams are more connected.

[[Arcade]] and [[Storylane]] are demo platforms designed to help sales teams with prospective conversations.  



# Blip Format

Future proofing (to be turned into a webapp), the blips are in the following format:

```
----
 ring:  Adopt, Trial, Assess, Hold, Stack
 quadrant:  Techniques, Platforms, Tools, Languages & Frameworks
 isNew: true, false
 status:  Draft, Published
----

<Title>.md          # Title in blip on the radar

First paragraph     # Appear as tooltips / quick view

Second paragraph    # Appears on the details pages
```


# Building json

Project reads the markdown files in `blips/` and builds a radar.json.  Github Actions deploys a json file to be used in the tech radar.

```
npm install
npm run radar
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