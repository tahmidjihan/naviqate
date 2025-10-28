import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';

const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    tags: '',
  });
  const editor = useRef(null);

  const config = {
    readonly: false,
    placeholder: 'Start typing your content...',
    height: 400,
    toolbarAdaptive: false,
    toolbarSticky: true,
    buttons: [
      'bold',
      'italic',
      'underline',
      'strikethrough',
      '|',
      'ul',
      'ol',
      '|',
      'outdent',
      'indent',
      '|',
      'font',
      'fontsize',
      'brush',
      '|',
      'image',
      'link',
      '|',
      'align',
      '|',
      'undo',
      'redo',
      '|',
      'preview',
      'fullsize',
    ],
  };
  // type data = { title: string; content: string, tags: string };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <div className=''>
        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* Title */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Article Title *
            </label>
            <input
              type='text'
              value={formData.title}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, title: e.target.value }))
              }
              className='w-full px-3 py-2 border bg-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              placeholder='Enter article title'
              required
            />
          </div>

          {/* Tags */}

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Tags *
            </label>
            <input
              type='text'
              value={formData.tags}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, tags: e.target.value }))
              }
              className='w-full px-3 py-2 border bg-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              placeholder='Enter tags separated by commas'
              required
            />
          </div>
          {/* Jodit Editor */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Content *
            </label>
            <div className='border border-gray-300 rounded-md overflow-hidden'>
              <JoditEditor
                ref={editor}
                value={formData.content}
                config={config}
                onBlur={(newContent) =>
                  setFormData((prev) => ({ ...prev, content: newContent }))
                }
              />
            </div>
          </div>

          {/* Form Actions */}
          <div className='flex gap-3 pt-4 border-t border-gray-200'>
            <button
              type='submit'
              className='px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors shadow-sm'
            >
              Publish Article
            </button>
            <button
              type='button'
              className='px-6 py-3 bg-gray-500 text-white font-medium rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors'
            >
              Save Draft
            </button>
            <button
              type='button'
              className='px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors'
            >
              Preview
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
