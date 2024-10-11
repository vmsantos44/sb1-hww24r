import React, { useState, useEffect } from 'react';
import { Linkedin, Users, RefreshCw } from 'lucide-react';

function App() {
  const [linkedInContacts, setLinkedInContacts] = useState([]);
  const [zohoLeads, setZohoLeads] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    // Simulated API calls (replace with actual API calls)
    const linkedInData = await fetchLinkedInContacts();
    const zohoData = await fetchZohoLeads();
    setLinkedInContacts(linkedInData);
    setZohoLeads(zohoData);
    setIsLoading(false);
  };

  const fetchLinkedInContacts = async () => {
    // Simulated API call
    return [
      { id: 1, name: 'John Doe', title: 'Software Engineer' },
      { id: 2, name: 'Jane Smith', title: 'Product Manager' },
    ];
  };

  const fetchZohoLeads = async () => {
    // Simulated API call
    return [
      { id: 1, name: 'Alice Johnson', company: 'Tech Co' },
      { id: 2, name: 'Bob Williams', company: 'Innovate Inc' },
    ];
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-600 p-4 flex items-center justify-between">
          <h1 className="text-white text-xl font-semibold">LinkedIn Zoho Integration</h1>
          <button
            onClick={fetchData}
            className="text-white hover:text-blue-200 transition-colors"
            title="Refresh data"
          >
            <RefreshCw size={20} />
          </button>
        </div>
        <div className="p-4">
          {isLoading ? (
            <div className="text-center py-4">
              <RefreshCw className="animate-spin mx-auto text-blue-600" size={24} />
              <p className="mt-2 text-gray-600">Loading data...</p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2 flex items-center">
                  <Linkedin className="mr-2 text-blue-600" size={20} />
                  LinkedIn Contacts
                </h2>
                <ul className="space-y-2">
                  {linkedInContacts.map((contact) => (
                    <li key={contact.id} className="bg-gray-50 p-2 rounded">
                      <p className="font-medium">{contact.name}</p>
                      <p className="text-sm text-gray-600">{contact.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2 flex items-center">
                  <Users className="mr-2 text-green-600" size={20} />
                  Zoho CRM Leads
                </h2>
                <ul className="space-y-2">
                  {zohoLeads.map((lead) => (
                    <li key={lead.id} className="bg-gray-50 p-2 rounded">
                      <p className="font-medium">{lead.name}</p>
                      <p className="text-sm text-gray-600">{lead.company}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;