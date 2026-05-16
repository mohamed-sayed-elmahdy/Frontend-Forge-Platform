import HeroSection from '@/components/marketing/HeroSection';
import NewsLetterSection from '@/components/marketing/NewsLetterSection';
import LatestBlogSection from '@/components/blog/LatestBlogSection';
import LatestIntervQSection from '@/components/interviews/LatestIntervQSection';
import DashboardPreview from '@/components/dashboard-preview/dashboard-preview';

export default function MarketingHomePage() {
    return (
        <>
            <HeroSection />
            <DashboardPreview />
            <LatestBlogSection />
            <LatestIntervQSection />
            <NewsLetterSection />
        </>
    );
}
