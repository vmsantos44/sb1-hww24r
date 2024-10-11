// This script will run on LinkedIn and Zoho CRM pages
console.log('LinkedIn Zoho Integration Extension loaded');

// Add logic here to interact with LinkedIn and Zoho CRM pages
// For example, you could add buttons to sync contacts or extract information

function addSyncButton() {
  const button = document.createElement('button');
  button.textContent = 'Sync with CRM';
  button.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 20px;
    background-color: #0077b5;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    z-index: 9999;
  `;
  button.addEventListener('click', () => {
    // Add logic to sync the current page's data with the CRM
    console.log('Syncing data with CRM...');
    // You would typically send a message to the background script here
    // to handle the actual API calls and data syncing
  });
  document.body.appendChild(button);
}

// Check if we're on a LinkedIn or Zoho page and add the sync button
if (window.location.hostname.includes('linkedin.com') || window.location.hostname.includes('zoho.com')) {
  addSyncButton();
}