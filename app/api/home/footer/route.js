import connectToDb from "@/utils/connectToDb";
import footer from "@/models/footer";
import { NextResponse } from "next/server";

export async function GET(request, response) {
    try {
        await connectToDb();
        const data = await footer.find()
        return NextResponse.json({
            data: data,
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in getting footer details" + e
        }, { status: 500 })
    }
}
export async function POST(request, response) {
    try {

        const body = await request.json();
        await connectToDb();
        await footer.create(body)
        return NextResponse.json({
            message: "footer details added successfully",
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in getting footer details" + e
        }, { status: 500 })
    }
}
export async function PATCH(request) {
    try {
        const url = new URL(request.url)
        const id = url.searchParams.get("id")
        const body = await request.json();
        await connectToDb();
        await footer.findByIdAndUpdate(id, body)
        return NextResponse.json({
            message: "footer details updated successfully",
        }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({
            message: "Error in updating footer Details" + e
        }, { status: 500 })
    }
}
// export async function DELETE(request, response) {
//     try {
//         const url = new URL(request.url)
//         const id = url.searchParams.get("id")
//         await connectToDb();
//         await footer.findByIdAndDelete(id)
//         return NextResponse.json({
//             message: "footer details Deleted successfully",
//         }, { status: 200 })
//     } 
//     catch (e) {
//         return NextResponse.json({
//             message: "Error in deleting footer details" + e
//         }, { status: 500 })
//     }
// }
