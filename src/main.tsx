import { createRoot } from "react-dom/client";
import { Button } from "./components/Button";
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
    throw new Error("Root element not found");
}

createRoot(rootElement).render(
    <div className="p-8 space-y-8">
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">Solid Buttons</h2>
            <div className="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button variant="solid" colorscheme="primary" size="lg">
                    Primary
                </Button>
                <Button variant="solid" colorscheme="danger" size="lg">
                    Danger
                </Button>
                <Button variant="solid" colorscheme="success" size="lg">
                    Success
                </Button>
                <Button variant="solid" colorscheme="warning" size="lg">
                    Warning
                </Button>
                <Button variant="solid" colorscheme="dark" size="lg">
                    Dark
                </Button>
                <Button variant="solid" colorscheme="light" size="lg">
                    Light
                </Button>
            </div>
        </div>

        <div className="space-y-4">
            <h2 className="text-2xl font-bold">Outline Buttons</h2>
            <div className="flex flex-wrap gap-4">
                <Button variant="outline" colorscheme="primary" size="lg">
                    Primary
                </Button>
                <Button variant="outline" colorscheme="danger" size="lg">
                    Danger
                </Button>
                <Button variant="outline" colorscheme="success" size="lg">
                    Success
                </Button>
                <Button variant="outline" colorscheme="warning" size="lg">
                    Warning
                </Button>
                <Button variant="outline" colorscheme="dark" size="lg">
                    Dark
                </Button>
                <Button variant="outline" colorscheme="light" size="lg">
                    Light
                </Button>
            </div>
        </div>

        <div className="space-y-4">
            <h2 className="text-2xl font-bold">Ghost Buttons</h2>
            <div className="flex flex-wrap gap-4">
                <Button variant="ghost" colorscheme="primary" size="lg">
                    Primary
                </Button>
                <Button variant="ghost" colorscheme="danger" size="lg">
                    Danger
                </Button>
                <Button variant="ghost" colorscheme="success" size="lg">
                    Success
                </Button>
                <Button variant="ghost" colorscheme="warning" size="lg">
                    Warning
                </Button>
                <Button variant="ghost" colorscheme="dark" size="lg">
                    Dark
                </Button>
                <Button variant="ghost" colorscheme="light" size="lg">
                    Light
                </Button>
            </div>
        </div>

        <div className="space-y-4">
            <h2 className="text-2xl font-bold">Button Sizes</h2>
            <div className="flex flex-wrap gap-4 items-center">
                <Button variant="solid" colorscheme="primary" size="sm">
                    Small
                </Button>
                <Button variant="solid" colorscheme="primary" size="md">
                    Medium
                </Button>
                <Button variant="solid" colorscheme="primary" size="lg">
                    Large
                </Button>
            </div>
        </div>

        <div className="space-y-4">
            <h2 className="text-2xl font-bold">Disabled Buttons</h2>
            <div className="flex flex-wrap gap-4">
                <Button variant="solid" colorscheme="primary" size="lg" disabled>
                    Disabled Solid
                </Button>
                <Button variant="outline" colorscheme="danger" size="lg" disabled>
                    Disabled Outline
                </Button>
                <Button variant="ghost" colorscheme="success" size="lg" disabled>
                    Disabled Ghost
                </Button>
                <Button variant="ghost" colorscheme="dark" size="lg" disabled>
                    Disabled Dark
                </Button>
                <Button variant="ghost" colorscheme="light" size="lg" disabled>
                    Disabled Light
                </Button>
            </div>
            {/* 3D Variants Section */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-700">3D Variants</h2>
                <div className="flex flex-wrap gap-4 items-center">
                    <Button variant="realistic" colorscheme="primary" size="md">
                        Primary 3D
                    </Button>
                    <Button variant="realistic" colorscheme="secondary" size="md">
                        Secondary 3D
                    </Button>
                    <Button variant="realistic" colorscheme="danger" size="md">
                        Danger 3D
                    </Button>
                    <Button variant="realistic" colorscheme="success" size="md">
                        Success 3D
                    </Button>
                    <Button variant="realistic" colorscheme="warning" size="md">
                        Warning 3D
                    </Button>
                    <Button variant="realistic" colorscheme="info" size="md">
                        Info 3D
                    </Button>
                    <Button variant="realistic" colorscheme="light" size="md">
                        Light 3D
                    </Button>
                    <Button variant="realistic" colorscheme="dark" size="md">
                        Dark 3D
                    </Button>
                </div>
            </section>

            {/* 3D Sizes */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-700">3D Sizes</h2>
                <div className="flex flex-wrap gap-4 items-center">
                    <Button variant="realistic" colorscheme="primary" size="sm">
                        Small 3D
                    </Button>
                    <Button variant="realistic" colorscheme="primary" size="md">
                        Medium 3D
                    </Button>
                    <Button variant="realistic" colorscheme="primary" size="lg">
                        Large 3D
                    </Button>
                </div>
            </section>

        </div>
    </div>
);
