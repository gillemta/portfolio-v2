import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="bg-primary text-secondary pt-8">
            <div className="container">
                <div className="flex flex-col items-center justify-center min-h-32 gap-6">
                    <div className="flex justify-end space-x-4 w-full">
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