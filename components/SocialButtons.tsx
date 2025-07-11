// components/SocialButtons.tsx
'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faWhatsapp, faUpwork } from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
        {
        href: 'HuzaifaIrfan-Resume.pdf',
        icon: faUser,
        label: 'Resume',
    },
    {
        href: 'https://github.com/HuzaifaIrfan',
        icon: faGithub,
        label: 'GitHub',
    },
        {
        href: 'https://wa.me/923155691280',
        icon: faWhatsapp,
        label: 'Whatsapp',
    },
        {
        href: 'mailto:contact@huzaifairfan.com',
        icon: faEnvelope,
        label: 'Email',
    },
        {
        href: 'https://www.upwork.com/freelancers/huzaifairfan2001',
        icon: faUpwork,
        label: 'Upwork',
    },
];


export default function SocialButtons() {
    return (
        <div className="social-icons">
            <div className="flex gap-4">
                {socialLinks.map(({ href, icon, label }) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="text-gray-600 hover:text-blue-500 text-2xl transition"
                    >
                        <FontAwesomeIcon icon={icon} />
                    </a>
                ))}

            </div>
        </div>
    );
}
