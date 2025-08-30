import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="h-32 bg-primary text-secondary">
            { }
            <div className="container">
                <div className="grid grid-cols-1 gap-6">
                    <div className="flex justify-end space-x-4">
                        <FaGithubSquare size={30} />
                        <FaLinkedin size={30} />
                    </div>

                    <div className="w-full border-t border-accent" />

                    <div className="text-center">
                        <p>© Copyright 2025 Tashan. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}