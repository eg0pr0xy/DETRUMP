// DETRUMP Extension - Content Script

// Function to find and replace text in DOM elements
function processDOMNode(node) {
  // Skip script and style elements
  if (node.nodeName === 'SCRIPT' || node.nodeName === 'STYLE') {
    return;
  }
  
  // Process text nodes
  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.textContent;
    
    // Case-insensitive regex to match 'Trump' or 'Donald Trump'
    const regex = /\b(donald\s+)?trump\b/gi;
    
    if (regex.test(text)) {
      // Create a wrapper span
      const span = document.createElement('span');
      span.innerHTML = text.replace(regex, '<span class="detrump-covered" title="Content Hidden by DETRUMP">█████</span>');
      
      // Replace the text node with our span
      node.parentNode.replaceChild(span, node);
    }
  } 
  // Process child nodes recursively
  else if (node.nodeType === Node.ELEMENT_NODE) {
    Array.from(node.childNodes).forEach(processDOMNode);
  }
}

// Initial scan of the page
function scanPage() {
  processDOMNode(document.body);
}

// Run when page loads
scanPage();

// Use MutationObserver to handle dynamically added content
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.addedNodes && mutation.addedNodes.length > 0) {
      mutation.addedNodes.forEach(processDOMNode);
    }
  });
});

// Start observing the document with configured parameters
observer.observe(document.body, {
  childList: true,
  subtree: true
});