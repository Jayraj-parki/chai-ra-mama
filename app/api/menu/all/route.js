import menuCard from "@/models/menu/menuCard";
import menuList from "@/models/menu/menuList";
import connectToDb from "@/utils/connectToDb";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        await connectToDb();

        const menuListData = await await menuList.find()
        const menuCardData = await await menuCard.find()
        return NextResponse.json({
            menuListData,
            menuCardData

        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in getting about page Details" + e
        }, { status: 500 })
    }
}