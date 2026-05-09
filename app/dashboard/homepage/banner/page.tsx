import { LogoIcon } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import Link from "next/link"

export default function BannerPage() {
  return (
    <div className="mx-auto max-w-200 space-y-6">
      <div>
        <h1 className="text-center text-2xl underline">
          Change Homepage Banner
        </h1>
      </div>
      <div>
        <NativeSelect>
          <NativeSelectOption value="" disabled>
            Select status
          </NativeSelectOption>
          <NativeSelectOption value="banner-01">Banner 01</NativeSelectOption>
          <NativeSelectOption value="banner-02">Banner 02</NativeSelectOption>
          <NativeSelectOption value="banner-03">Banner 03</NativeSelectOption>
        </NativeSelect>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="block text-sm">
          Banner Title
        </Label>
        <Input type="text" required name="title" id="titlle" />
      </div>

      <div className="space-y-0.5">
        <div className="flex items-center justify-between">
          <Label htmlFor="pwd" className="text-sm">
            Upload Image
          </Label>
        </div>
        <Input
          type="file"
          required
          name="file"
          id="file"
          className="input sz-md variant-mixed cursor-pointer mt-1"
        />
      </div>

      <Button className="w-full">Update</Button>
    </div>
  )
}
