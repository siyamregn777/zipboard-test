import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

const Navbar = () => {
  const { setTheme } = useTheme();

  return (
    <div className="sticky">
      <nav className="bg-white dark:bg-gray-900 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 hover:scale-110 text-xl font-bold text-gray-900 dark:text-white tracking-tighter bg-gradient-to-r from-gray-100 to-amber-200 dark:from-gray-800 dark:to-yellow-900 rounded-xl px-4 py-1 transition-all duration-300">
            <Link href="/">ZipBoard</Link>
          </div>

          {/* Nav links + theme switch */}
          <div className="space-x-4 flex items-center">
            {["/", "/about", "/contact", "/login"].map((path, i) => (
              <Link
                key={i}
                href={path}
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {path === "/"
                  ? "Home"
                  : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}

            {/* Theme switch */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Moon className="cursor-pointer"/>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  <Sun className="mr-2 cursor-pointer" />
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  <Moon className="mr-2 cursor-pointer" />
                  Dark
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
