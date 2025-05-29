# DETRUMP Chrome Extension

<p align="center">
<pre style="background-color: black; color: white; padding: 20px; display: inline-block; border-radius: 10px;">
  ▓▓▓▓▓▓
  ▓▓  ▓▓
  ▓▓  ▓▓
  ▓▓  ▓▓
  ▓▓▓▓▓▓
</pre>
</p>

A Chrome extension that automatically detects and covers any text mentioning Trump with a black overlay. When users hover over the covered text, a tooltip appears indicating that the content has been hidden.

## Example

Here's how the extension works in practice:

![Example of DETRUMP extension in action](release/detrump-extension/screenshots/example-censored.png)

The extension automatically detects and covers Trump-related text with a black overlay. Hovering over the censored text shows a tooltip indicating that content has been hidden.

## Quick Installation

1. Download this extension:
   - Click the green "Code" button above
   - Select "Download ZIP"
   - Extract the ZIP file to a folder on your computer

2. Install in Chrome:
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" in the top right corner
   - Click "Load unpacked"
   - Select the `release/detrump-extension` folder from the extracted files

That's it! The extension will now automatically censor Trump-related content on all websites.

## Features

- Automatically detects and covers mentions of "Trump", "Trumps", "Donald Trump", or "Donald Trumps" (case-insensitive)
- Real-time content scanning for dynamically loaded content
- Hover tooltips to indicate hidden content
- Minimal performance impact
- Works on all websites

## Development

### Project Structure
```
release/detrump-extension/
├── manifest.json      # Extension configuration
├── content.js        # Main content script
├── styles.css        # Styling for covered text
├── icons/           # Extension icons
└── screenshots/     # Extension screenshots
```

### Requirements
- Chrome Browser
- Developer mode enabled in Chrome extensions

### Testing
1. Open `test.html` in your browser
2. The extension should automatically cover all Trump-related text
3. Hover over covered text to see tooltips

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the terms included in the LICENSE file.

## Privacy
This extension operates entirely client-side and does not collect or transmit any data.
