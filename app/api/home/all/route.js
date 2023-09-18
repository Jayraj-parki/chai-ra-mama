import connectToDb from "@/utils/connectToDb";
import { NextResponse } from "next/server";
import homeGallery from "@/models/home/homeGallery";
import homeBanner from "@/models/home/homeBanner";
import homeHeaderCard from "@/models/home/homeHeaderCard";
import homeAboutUs from "@/models/home/homeAboutUs";
import homeTestimonialCard from "@/models/home/homeTestimonialCard";
import homeGetInTouchImage from "@/models/home/homeGetInTouchImage";
import homeMenuCard from "@/models/home/homeMenuCard";

export async function GET() {
    try {
        await connectToDb();
        const homeBannerData = await homeBanner.find()
        const homeHeaderCardData = await homeHeaderCard.find()
        const homeAboutUsData = await homeAboutUs.find()
        const homeGalleryData = await homeGallery.find()
        const homeMenuCardData = await await homeMenuCard.find()
        const homeTestimonialCardData = await homeTestimonialCard.find().limit(4)
        const homeGetInTouchImageData = await homeGetInTouchImage.findOne()
        return NextResponse.json({
            homeBannerData,
            homeHeaderCardData, 
            homeAboutUsData,
            homeGalleryData,
            homeMenuCardData,
            homeTestimonialCardData,
            homeGetInTouchImageData,
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in getting Home page Details" + e
        }, { status: 500 })
    }
}