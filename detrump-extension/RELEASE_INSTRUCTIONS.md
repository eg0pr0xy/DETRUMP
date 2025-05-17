# Creating a GitHub Release for DETRUMP Extension

Follow these steps to create a proper GitHub release with the extension package:

## 1. Prepare Your Release Package

1. Make sure all your code is finalized and tested
2. Create a ZIP file of your extension:
   - On Linux/Mac: `zip -r detrump-extension.zip detrump-extension/` (excluding .git folder)
   - On Windows: Right-click the folder > Send to > Compressed (zipped) folder

## 2. Create a GitHub Release

1. Go to your GitHub repository
2. Click on "Releases" in the right sidebar (or navigate to https://github.com/yourusername/detrump/releases)
3. Click "Create a new release" or "Draft a new release"
4. Fill in the release information:
   - **Tag version**: v1.0.0 (using semantic versioning)
   - **Release title**: DETRUMP Extension v1.0.0
   - **Description**: Add release notes describing the features and functionality

## 3. Add Release Assets

1. Drag and drop your ZIP file (detrump-extension.zip) to the "Attach binaries" section
2. You can also attach any other relevant files (documentation, etc.)

## 4. Publish the Release

1. If you're ready to make it public, click "Publish release"
2. If you want to save it as a draft first, click "Save draft"

## 5. Update README with Release Link

After publishing, update your README.md with a link to the latest release:

```markdown
## Download

You can download the latest version of the DETRUMP Extension from the [Releases page](https://github.com/yourusername/detrump/releases/latest).
```

## Release Notes Template

Here's a template for your first release notes:

```
# DETRUMP Extension v1.0.0

Initial release of the DETRUMP Chrome Extension.

## Features

- Automatically scans all webpages for mentions of "Trump" or "Donald Trump"
- Covers detected text with a black overlay
- Shows a tooltip "Content Hidden by DETRUMP" on hover
- Works with dynamically loaded content
- Case-insensitive detection (works with "trump", "TRUMP", etc.)
- Smart word boundary detection (won't affect words like "trumpet" or "triumphant")

## Installation

1. Download the ZIP file
2. Extract to a folder on your computer
3. Open Chrome and go to chrome://extensions/
4. Enable Developer Mode
5. Click "Load unpacked" and select the extracted folder
```

## Updating the Extension

For future updates:
1. Make your code changes
2. Update the version number in `manifest.json`
3. Create a new release following the steps above
4. Update the release notes to highlight the changes