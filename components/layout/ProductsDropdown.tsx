import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Package } from "lucide-react";
const ProductsDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-auto gap-2 px-2 py-1 text-lg font-medium text-gray-900 hover:bg-transparent hover:text-[#cfac6e] focus-visible:ring-0 cursor-pointer"
        >
          <span className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Products
            <ChevronDown className="h-4 w-4" />
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="center"
        className="w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-lg"
      >
        <DropdownMenuLabel className="text-xs uppercase tracking-wider text-slate-500">
          Abhash
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/products/abhash-smart-cane" className="cursor-pointer">
              Smart Cane
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link
              href="/products/abhash-smart-glasses"
              className="cursor-pointer"
            >
              Smart Glasses
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProductsDropdown;
