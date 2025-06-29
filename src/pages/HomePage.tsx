import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/HeroSection';
import IntroductionSection from '../components/sections/IntroductionSection';
import UIPreviewSection from '../components/sections/HomeSection';
import InventoryManagementSection from '../components/sections/InventoryManagementSection';
import ScanningSection from '../components/sections/ScanningSection';
import MealPlanningSection from '../components/sections/MealPlanningSection';
import RecipeDetailSection from '../components/sections/RecipeDetailSection';
import NutritionAnalysisSection from '../components/sections/NutritionAnalysisSection';
import ExpiringFoodRescueSection from '../components/sections/ExpiringFoodRescueSection';
import ProfileSection from '../components/sections/ProfileSection';
import FAQSection from '../components/sections/FAQSection';

const HomePage = () => {
    return (
        <Layout>
            <HeroSection />
            <IntroductionSection />
            <UIPreviewSection />
            <ScanningSection />
            <MealPlanningSection />
            <NutritionAnalysisSection />
            <ProfileSection />
            <ExpiringFoodRescueSection />
            <InventoryManagementSection />
            <RecipeDetailSection />
            <FAQSection />
        </Layout>
    );
};

export default HomePage; 