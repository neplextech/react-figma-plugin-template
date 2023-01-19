# Simple Figma UI

Figma plugin to easily import prebuilt ui components.

# Support

Join our Discord server: [discord.gg/xxXJkUb9FM](https://discord.gg/xxXJkUb9FM)

# Contributing

First of all, read the [Contributing Guide](https://github.com/neplextech/simple-figma-ui/blob/main/CONTRIBUTING.md). Then, [Fork](https://github.com/neplextech/simple-figma-ui/fork) and follow the steps below:

```sh
# Clone forked repo
$ git clone <forkedRepoURL> simple-figma-ui

# Open vscode in cloned repository
$ code simple-figma-ui # use code-insiders if you have vscode insiders

# Create a development branch
$ git checkout -b branchName

# Install dependencies
$ yarn install --immutable

# ... (make changes)

# Build the plugin
$ yarn build

# test the plugin in figma desktop app to make sure everything's working

# once everything seems to be good, push the changes
$ git add .
$ git commit -m "commit message"
$ git push origin branchName

# After pushing, make a pull request to this repository
```

#### How to test the plugin?

* Open Figma
* Go to Plugins menu
* Click on `Development`
* Click `Import plugin from manifest`
* Navigate to the cloned repository dir and select `manifest.json` file
* Then you should be able to see the plugin in your plugins list

![pluginListExample](https://i.imgur.com/acC5Z6c.png)

* Click `Run` button