import React from 'react';
import { COMPANY_NAME, COMPANY_FULL_NAME, CONTACT_INFO } from '../constants';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { content } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand & Address */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#" className="flex items-start gap-3">
              <div className="bg-white p-1.5 rounded-xl">
                 <Logo className="h-10 w-auto" />
              </div>
              <div className="flex flex-col">
                 <span className="text-2xl font-bold tracking-tight text-white">{COMPANY_NAME}</span>
                 <span className="text-sm text-slate-400 font-medium">{COMPANY_FULL_NAME}</span>
              </div>
            </a>
            <div className="space-y-4 text-slate-400 mt-6">
                <div className="flex gap-3">
                    <MapPin className="shrink-0 mt-1 text-secondary-500" size={18} />
                    <p>
                        {CONTACT_INFO.addressLines[0]}<br/>
                        {CONTACT_INFO.addressLines[1]}<br/>
                        {CONTACT_INFO.addressLines[2]}<br/>
                        {CONTACT_INFO.addressLines[3]}
                    </p>
                </div>
                <div className="flex gap-3 items-center">
                    <Phone size={18} className="text-secondary-500" />
                    <p>{CONTACT_INFO.phone}</p>
                </div>
                <div className="flex gap-3 items-center">
                    <Mail size={18} className="text-secondary-500" />
                    <p>{CONTACT_INFO.email}</p>
                </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-primary-500 pl-3">{content.footer.navTitle}</h4>
            <ul className="space-y-3">
              {content.nav.map((item) => (
                <li key={item.label}>
                    <a href={item.href} className="text-slate-400 hover:text-primary-400 transition-colors">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product List Snippet */}
          <div className="lg:col-span-4">
            <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-secondary-500 pl-3">{content.footer.productsTitle}</h4>
            <ul className="space-y-3">
              {content.products.items.slice(0, 5).map((product) => (
                <li key={product.id}>
                  <a href="#products" className="text-slate-400 hover:text-secondary-400 transition-colors text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-secondary-500 rounded-full"></span>
                    {product.title}
                  </a>
                </li>
              ))}
              <li><a href="#products" className="text-primary-400 hover:text-white transition-colors text-sm italic">{content.footer.more}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {currentYear} {COMPANY_NAME}. {content.footer.rights}
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-500 hover:text-primary-400 transition-colors hover:scale-110"><Facebook size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-primary-400 transition-colors hover:scale-110"><Twitter size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-primary-400 transition-colors hover:scale-110"><Instagram size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-primary-400 transition-colors hover:scale-110"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;