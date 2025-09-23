import React, { useState, useEffect } from 'react';
import { X, Scale } from 'lucide-react';
import content from '../content.json';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-fade-in-up flex flex-col">
        {/* Header */}
        <div className="bg-secondary text-white p-6 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <Scale className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">{content.termsModal.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors focus-ring"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="prose prose-gray max-w-none">
            <p className="text-text-light mb-6">
              {content.termsModal.intro}
            </p>

            {content.termsModal.sections.map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-secondary mb-4">{section.title}</h3>
                <p className="text-text mb-6">{section.content}</p>
              </div>
            ))}

            <div className="bg-gray-50 p-4 rounded-lg mt-8">
              <p className="text-sm text-text-light">
                <strong>{content.termsModal.lastUpdated}</strong> {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-6 flex flex-col sm:flex-row gap-4 justify-end flex-shrink-0 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-6 py-3 border border-gray-300 text-text rounded-lg hover:bg-gray-100 transition-colors focus-ring"
          >
            {content.termsModal.declineButton}
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors focus-ring"
          >
            {content.termsModal.acceptButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;