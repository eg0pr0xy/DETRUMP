# DETRUMP Chrome Extension

<p align="center">
  <img src="https://images.unsplash.com/photo-1598432439373-0dedb103d38a" alt="DETRUMP Banner" width="800">
</p>

<p align="center">
  <a href="https://github.com/yourusername/detrump/releases/latest"><img src="https://img.shields.io/github/v/release/yourusername/detrump?style=flat-square" alt="Latest Release"></a>
  <a href="https://github.com/yourusername/detrump/blob/main/LICENSE"><img src="https://img.shields.io/github/license/yourusername/detrump?style=flat-square" alt="License"></a>
  <a href="https://github.com/yourusername/detrump/issues"><img src="https://img.shields.io/github/issues/yourusername/detrump?style=flat-square" alt="Issues"></a>
  <a href="https://github.com/yourusername/detrump/stargazers"><img src="https://img.shields.io/github/stars/yourusername/detrump?style=flat-square" alt="Stars"></a>
</p>

<p align="center">
  A sleek Chrome extension that automatically detects and covers any text mentioning "Trump" or "Donald Trump" with a black overlay.
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#screenshots">Screenshots</a> •
  <a href="#installation-from-github">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#testing">Testing</a> •
  <a href="#development">Development</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

---

## ✨ Features

- Automatically scans all webpages for mentions of "Trump" or "Donald Trump"
- Covers detected text with a black overlay
- Shows a tooltip "Content Hidden by DETRUMP" on hover
- Works with dynamically loaded content
- Case-insensitive detection (works with "trump", "TRUMP", etc.)
- Smart word boundary detection (won't affect words like "trumpet" or "triumphant")

## 📸 Screenshots

*[Add screenshots of the extension in action here]*

## 📥 Installation from GitHub

### Method 1: Download from Releases (Recommended)

1. **Download the latest release**
   - Go to the [Releases page](https://github.com/yourusername/detrump/releases/latest)
   - Download the `detrump-extension.zip` file
   - Extract the ZIP file to a location on your computer

2. **Install in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" by toggling the switch in the top-right corner
   - Click "Load unpacked" button that appears
   - Select the extracted extension folder
   - The extension should now be installed and active!

### Method 2: Direct Installation from Repository

1. **Download the extension**
   - Click the green "Code" button on the repository page
   - Select "Download ZIP"
   - Extract the ZIP file to a location on your computer

2. **Install in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" by toggling the switch in the top-right corner
   - Click "Load unpacked" button that appears
   - Select the extracted extension folder
   - The extension should now be installed and active!

### Method 2: Clone the Repository

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/detrump.git
   cd detrump
   ```

2. **Install in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" by toggling the switch in the top-right corner
   - Click "Load unpacked" button that appears
   - Select the cloned repository folder
   - The extension should now be installed and active!

## 🚀 Usage

The extension works automatically on all webpages. No configuration required!

- Visit any webpage that mentions "Trump" or "Donald Trump"
- The mentions will be automatically covered with a black overlay
- Hover over the black overlay to see the tooltip "Content Hidden by DETRUMP"

## 🧪 Testing

The extension includes two test files:

1. `test.html` - A simple test page with various examples of Trump mentions
2. `test_detailed.html` - An automated test suite that verifies proper functionality

To run the tests:
- Open either file in a browser after installing the extension
- For `test_detailed.html`, check the test results displayed on the page

## Development

### Extension Structure

- `manifest.json` - Configuration file for the Chrome extension
- `content.js` - Content script that detects and covers Trump mentions
- `styles.css` - Styling for the black overlay and tooltip
- `icons/` - Extension icons in various sizes

### How It Works

1. The content script uses regex with word boundaries to detect mentions of "Trump" or "Donald Trump"
2. Detected text is replaced with a span element with a black background
3. CSS styling adds the tooltip functionality
4. MutationObserver ensures dynamically loaded content is also processed

### Modifying the Extension

- **To change the replacement style**: Edit the `.detrump-covered` CSS class in `styles.css`
- **To change the tooltip text**: Edit the content in both the `title` attribute in `content.js` and the `content` property in the CSS
- **To modify detection patterns**: Edit the regex pattern in `content.js`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Created as a demonstration project
- Inspired by the need for more peaceful web browsing