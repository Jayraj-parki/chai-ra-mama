import connectToDb from "@/utils/connectToDb";
import { NextResponse } from "next/server";
import aboutBanner from "@/models/aboutus/aboutBanner";
import aboutIntro from "@/models/aboutus/aboutIntro";
import aboutBestCoffee from "@/models/aboutus/aboutBestCoffee";
import aboutWCU from "@/models/aboutus/aboutWCU";
import ourChef from "@/models/aboutus/ourChef";

export async function GET() {
    try {
        await connectToDb();
        const aboutBannerData = await aboutBanner.findOne()
        const aboutIntroData = await aboutIntro.findOne()
        const aboutWCUDataData = await aboutWCU.find().limit(3)
        const aboutBestCoffeeData = await aboutBestCoffee.findOne()
        const ourChefData = await await ourChef.find()
        return NextResponse.json({
            aboutBannerData,
            aboutIntroData,
            aboutWCUDataData,
            aboutBestCoffeeData,
            ourChefData,

        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in getting about page Details" + e
        }, { status: 500 })
    }
}