import { ThemeToggle } from "../components/themeToggle";
import {StarBackground} from "@/components/StarBackground";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
       {/* Theme toggle */}
        <ThemeToggle/>
       {/*Background Effects*/ }
        <StarBackground/>
       {/*NavBar*/ }

       {/*Main Content*/ }

       {/*Footer*/ }
    </div>
}