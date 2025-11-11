import { useState } from 'react';
import {
  FiSearch,
  FiMail,
  FiStar,
  FiArchive,
  FiTrash2,
  FiCheckCircle,
  FiInbox,
  FiSend,
} from 'react-icons/fi';

interface Inbox {
  id: number;
  name: string;
  icon: any;
  count: number;
}

interface Message {
  id: number;
  sender: string;
  email: string;
  subject: string;
  preview: string;
  time: string;
  read: boolean;
  starred: boolean;
  hasAttachment?: boolean;
}

export default function Inbox() {
  const [selectedInbox, setSelectedInbox] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedMessages, setSelectedMessages] = useState<Set<number>>(
    new Set()
  );

  const inboxes: Inbox[] = [
    { id: 1, name: 'Sales', icon: FiMail, count: 67 },
    { id: 2, name: 'Inquiry', icon: FiInbox, count: 45 },
    { id: 3, name: 'Support', icon: FiSend, count: 32 },
    { id: 4, name: 'Partnership', icon: FiArchive, count: 18 },
    { id: 5, name: 'Marketing', icon: FiStar, count: 23 },
  ];

  const messages: Message[] = [
    {
      id: 1,
      sender: 'Sarah Johnson',
      email: 'sarah@techcorp.com',
      subject: 'Q4 Marketing Campaign Review',
      preview:
        "Hi team, I've attached the latest analytics report for our Q4 campaigns...",
      time: '10:24 AM',
      read: false,
      starred: true,
      hasAttachment: true,
    },
    {
      id: 2,
      sender: 'Mike Rodriguez',
      email: 'mike@startup.io',
      subject: 'Weekly Team Sync - Action Items',
      preview:
        "Following up on yesterday's meeting. Here are the key takeaways and next steps...",
      time: '9:15 AM',
      read: false,
      starred: false,
    },
    {
      id: 3,
      sender: 'Emily Chen',
      email: 'emily@designstudio.com',
      subject: 'Design System Updates v2.3',
      preview:
        'The new component library is ready for review. Please check the updated documentation...',
      time: 'Yesterday',
      read: true,
      starred: true,
      hasAttachment: true,
    },
    {
      id: 4,
      sender: 'Alex Thompson',
      email: 'alex@company.com',
      subject: 'Invoice #INV-2024-1052',
      preview:
        'Your invoice for October services is attached. Payment is due by Nov 15th...',
      time: 'Yesterday',
      read: true,
      starred: false,
      hasAttachment: true,
    },
    {
      id: 5,
      sender: 'David Kim',
      email: 'david@analytics.co',
      subject: 'Monthly Performance Report',
      preview:
        "Here's the comprehensive breakdown of our metrics for October 2024...",
      time: 'Oct 28',
      read: true,
      starred: false,
    },
    {
      id: 6,
      sender: 'Rachel Green',
      email: 'rachel@partner.com',
      subject: 'Partnership Proposal Discussion',
      preview:
        "Thank you for the call earlier. As discussed, I'm sending over the proposal draft...",
      time: 'Oct 28',
      read: true,
      starred: false,
    },
  ];

  const filteredMessages = messages.filter(
    (message) =>
      message.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleMessage = (id: number) => {
    const newSelected = new Set(selectedMessages);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedMessages(newSelected);
  };

  const toggleAll = () => {
    if (selectedMessages.size === filteredMessages.length) {
      setSelectedMessages(new Set());
    } else {
      setSelectedMessages(new Set(filteredMessages.map((m) => m.id)));
    }
  };

  const selectedInboxData = inboxes.find((inbox) => inbox.id === selectedInbox);
  const Icon = selectedInboxData?.icon || FiInbox;

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-7xl mx-auto p-6'>
        {/* Header */}
        <div className='mb-6'>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>Mail</h1>
          <p className='text-gray-600'>
            Manage your messages and communications
          </p>
        </div>

        <div className='grid grid-cols-12 gap-6'>
          {/* Main Content */}
          <div className='col-span-9'>
            <div className='bg-white rounded-lg shadow-sm border border-gray-200'>
              {/* Toolbar */}
              <div className='p-4 border-b border-gray-200'>
                <div className='flex items-center justify-between mb-4'>
                  <div className='flex items-center gap-3'>
                    <Icon className='w-6 h-6 text-rose-600' />
                    <h2 className='text-xl font-semibold text-gray-900'>
                      {selectedInboxData?.name}
                    </h2>
                    <span className='text-sm text-gray-500'>
                      ({filteredMessages.filter((m) => !m.read).length} unread)
                    </span>
                  </div>
                  <button className='bg-rose-600 text-white rounded-lg py-2 px-6 font-medium hover:bg-rose-700 transition-colors flex items-center justify-center gap-2'>
                    <FiMail className='w-5 h-5' />
                    Compose
                  </button>
                </div>

                <div className='relative'>
                  <FiSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                  <input
                    type='text'
                    placeholder='Search mail...'
                    className='w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent text-gray-900'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Actions Bar */}
              {selectedMessages.size > 0 && (
                <div className='px-4 py-3 bg-rose-50 border-b border-rose-100 flex items-center justify-between'>
                  <span className='text-sm font-medium text-rose-900'>
                    {selectedMessages.size} selected
                  </span>
                  <div className='flex items-center gap-2'>
                    <button className='px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 flex items-center gap-2'>
                      <FiCheckCircle className='w-4 h-4' />
                      Mark as read
                    </button>
                    <button className='px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 flex items-center gap-2'>
                      <FiArchive className='w-4 h-4' />
                      Archive
                    </button>
                    <button className='px-3 py-1.5 text-sm font-medium text-red-600 bg-white border border-red-300 rounded hover:bg-red-50 flex items-center gap-2'>
                      <FiTrash2 className='w-4 h-4' />
                      Delete
                    </button>
                  </div>
                </div>
              )}

              {/* Messages List */}
              <div className='divide-y divide-gray-200'>
                {/* Select All */}
                <div className='px-4 py-3 bg-gray-50 flex items-center gap-3'>
                  <input
                    type='checkbox'
                    checked={
                      selectedMessages.size === filteredMessages.length &&
                      filteredMessages.length > 0
                    }
                    onChange={toggleAll}
                    className='w-4 h-4 text-rose-600 rounded border-gray-300 focus:ring-rose-500'
                  />
                  <span className='text-sm font-medium text-gray-700'>
                    Select all
                  </span>
                </div>

                {filteredMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`px-4 py-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                      !message.read ? 'bg-rose-50/30' : ''
                    } ${selectedMessages.has(message.id) ? 'bg-rose-50' : ''}`}
                  >
                    <div className='flex items-start gap-4'>
                      <input
                        type='checkbox'
                        checked={selectedMessages.has(message.id)}
                        onChange={() => toggleMessage(message.id)}
                        className='mt-1 w-4 h-4 text-rose-600 rounded border-gray-300 focus:ring-rose-500'
                        onClick={(e) => e.stopPropagation()}
                      />

                      <div className='flex-1 min-w-0'>
                        <div className='flex items-start justify-between gap-4 mb-1'>
                          <div className='flex-1 min-w-0'>
                            <div className='flex items-center gap-2 mb-1'>
                              <span
                                className={`font-semibold text-sm ${
                                  !message.read
                                    ? 'text-gray-900'
                                    : 'text-gray-700'
                                }`}
                              >
                                {message.sender}
                              </span>
                              {message.hasAttachment && (
                                <svg
                                  className='w-4 h-4 text-gray-400'
                                  fill='none'
                                  stroke='currentColor'
                                  viewBox='0 0 24 24'
                                >
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13'
                                  />
                                </svg>
                              )}
                            </div>
                            <h4
                              className={`text-sm mb-1 ${
                                !message.read
                                  ? 'font-semibold text-gray-900'
                                  : 'font-normal text-gray-700'
                              }`}
                            >
                              {message.subject}
                            </h4>
                            <p className='text-sm text-gray-600 truncate'>
                              {message.preview}
                            </p>
                          </div>
                          <div className='flex items-center gap-3 flex-shrink-0'>
                            <span className='text-xs text-gray-500 whitespace-nowrap'>
                              {message.time}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className='px-4 py-3 border-t border-gray-200 flex items-center justify-between bg-gray-50'>
                <div className='text-sm text-gray-600'>
                  {filteredMessages.length}{' '}
                  {filteredMessages.length === 1 ? 'message' : 'messages'}
                </div>
                <div className='flex items-center gap-2'>
                  <button className='px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-white text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed'>
                    Previous
                  </button>
                  <button className='px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-white text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed'>
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Categories */}
          <div className='col-span-3'>
            <div className='bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden h-fit'>
              <div className='p-5 bg-rose-600 text-white'>
                <h3 className='font-semibold text-lg'>Categories</h3>
              </div>

              <div className='p-4'>
                {inboxes.map((inbox) => {
                  const InboxIcon = inbox.icon;
                  return (
                    <button
                      key={inbox.id}
                      onClick={() => setSelectedInbox(inbox.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg mb-2 transition-all ${
                        selectedInbox === inbox.id
                          ? 'bg-rose-500 text-white shadow-md'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className='flex items-center gap-3'>
                        <InboxIcon
                          className={`w-5 h-5 ${
                            selectedInbox === inbox.id
                              ? 'text-white'
                              : 'text-rose-600'
                          }`}
                        />
                        <span className='font-medium'>{inbox.name}</span>
                      </div>
                      <span
                        className={`text-sm font-semibold px-2.5 py-1 rounded-full ${
                          selectedInbox === inbox.id
                            ? 'bg-rose-600 text-white'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {inbox.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className='p-5 border-t border-gray-200 bg-gray-50'>
                <button className='w-full py-3 px-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-lg font-medium hover:from-rose-600 hover:to-rose-700 transition-all shadow-sm'>
                  Create New Category
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
