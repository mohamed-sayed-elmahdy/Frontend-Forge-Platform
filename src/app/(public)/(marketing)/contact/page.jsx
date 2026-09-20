'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ArrowUpRight, Check, ChevronDown, Clock3, Mail, MessageCircle, Send } from 'lucide-react';

const faqKeys = ['account', 'free', 'issue', 'suggestion', 'contribute', 'response'];

export default function ContactPage() {
    const t = useTranslations('contact');
    const [openFaq, setOpenFaq] = useState('account');
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);
        event.currentTarget.reset();
    }

    return (
        <main className="min-h-screen px-4 pb-24 pt-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <section className="relative overflow-hidden rounded-[2rem] border border-[var(--btn-border)] bg-[var(--bg-card)] px-6 py-14 shadow-2xl shadow-black/10 sm:px-12 lg:px-16">
                    <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border-[24px] border-[var(--text-active)]/10" />
                    <div className="relative max-w-3xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--text-active)]">{t('eyebrow')}</p>
                        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-[var(--text)] sm:text-6xl">{t('title')}</h1>
                        <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-muted)] sm:text-lg">{t('description')}</p>
                    </div>
                </section>

                <section className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                    <div className="space-y-8 px-2 py-4">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--text-active)]">{t('supportEyebrow')}</p>
                            <h2 className="mt-3 text-3xl font-bold text-[var(--text)]">{t('supportTitle')}</h2>
                            <p className="mt-4 leading-7 text-[var(--text-muted)]">{t('supportDescription')}</p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--text-active)]/10 text-[var(--text-active)]"><MessageCircle size={20} /></span>
                                <div><h3 className="font-semibold text-[var(--text)]">{t('supportCardTitle')}</h3><p className="mt-1 text-sm leading-6 text-[var(--text-muted)]">{t('supportCardText')}</p></div>
                            </div>
                            <div className="flex gap-4">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--text-active)]/10 text-[var(--text-active)]"><Clock3 size={20} /></span>
                                <div><h3 className="font-semibold text-[var(--text)]">{t('responseTitle')}</h3><p className="mt-1 text-sm leading-6 text-[var(--text-muted)]">{t('responseText')}</p></div>
                            </div>
                            <div className="flex gap-4">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--text-active)]/10 text-[var(--text-active)]"><Mail size={20} /></span>
                                <div><h3 className="font-semibold text-[var(--text)]">{t('beforeMessageTitle')}</h3><p className="mt-1 text-sm leading-6 text-[var(--text-muted)]">{t('beforeMessageText')}</p></div>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="rounded-3xl border border-[var(--btn-border)] bg-[var(--bg-card)] p-6 shadow-xl shadow-black/10 sm:p-8">
                        <div className="mb-8"><h2 className="text-2xl font-bold text-[var(--text)]">{t('formTitle')}</h2><p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{t('formDescription')}</p></div>
                        <div className="space-y-5">
                            <div><label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-[var(--text)]">{t('nameLabel')}</label><input id="contact-name" name="name" type="text" autoComplete="name" placeholder={t('namePlaceholder')} required className="h-12 w-full rounded-xl border border-[var(--btn-border)] bg-transparent px-4 text-[var(--text)] outline-none transition focus:border-[var(--text-active)] focus:ring-2 focus:ring-[var(--text-active)]/20" /></div>
                            <div><label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-[var(--text)]">{t('emailLabel')}</label><input id="contact-email" name="email" type="email" autoComplete="email" placeholder={t('emailPlaceholder')} required className="h-12 w-full rounded-xl border border-[var(--btn-border)] bg-transparent px-4 text-[var(--text)] outline-none transition focus:border-[var(--text-active)] focus:ring-2 focus:ring-[var(--text-active)]/20" /></div>
                            <div><label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-[var(--text)]">{t('messageLabel')}</label><textarea id="contact-message" name="message" rows="6" placeholder={t('messagePlaceholder')} required className="w-full resize-y rounded-xl border border-[var(--btn-border)] bg-transparent px-4 py-3 text-[var(--text)] outline-none transition focus:border-[var(--text-active)] focus:ring-2 focus:ring-[var(--text-active)]/20" /></div>
                            <button type="submit" className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[var(--text-active)] px-5 font-semibold text-[var(--bg-black)] transition hover:opacity-90">{submitted ? <Check size={18} /> : <Send size={18} />}{submitted ? t('sentButton') : t('sendButton')}</button>
                            {submitted && <p role="status" className="flex items-center gap-2 text-sm text-emerald-500"><Check size={16} />{t('successMessage')}</p>}
                        </div>
                    </form>
                </section>

                <section className="mt-24 grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
                    <div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--text-active)]">{t('faqEyebrow')}</p><h2 className="mt-3 text-3xl font-bold text-[var(--text)]">{t('faqTitle')}</h2><p className="mt-4 leading-7 text-[var(--text-muted)]">{t('faqDescription')}</p></div>
                    <div className="divide-y divide-[var(--btn-border)] border-y border-[var(--btn-border)]">
                        {faqKeys.map((key) => {
                            const isOpen = openFaq === key;
                            return <div key={key}><button type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? '' : key)} className="flex w-full items-center justify-between gap-6 py-5 text-start text-base font-semibold text-[var(--text)]">{t(`questions.${key}.question`)}<ChevronDown size={19} className={`shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[var(--text-active)]' : ''}`} /></button>{isOpen && <p className="pb-5 pe-8 text-sm leading-7 text-[var(--text-muted)]">{t(`questions.${key}.answer`)}</p>}</div>;
                        })}
                    </div>
                </section>

                <section className="mt-24 flex flex-col items-start justify-between gap-6 rounded-3xl border border-[var(--btn-border)] bg-[var(--bg-card)] p-8 sm:flex-row sm:items-center sm:p-10">
                    <div><h2 className="text-2xl font-bold text-[var(--text)]">{t('ctaTitle')}</h2><p className="mt-2 text-[var(--text-muted)]">{t('ctaDescription')}</p></div>
                    <a href="#contact-name" className="inline-flex shrink-0 items-center gap-2 font-semibold text-[var(--text-active)] hover:underline">{t('ctaAction')} <ArrowUpRight size={18} /></a>
                </section>
            </div>
        </main>
    );
}
