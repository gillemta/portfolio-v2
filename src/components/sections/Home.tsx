import { Button } from "../ui/button"
import { BaseSection } from "../ui/BaseSection"

export function Home() {
    return (
        <BaseSection id="home" bgColor="bg-primary">
            <p className="text-secondary">Hello, my name is</p>
            <h1 className="text-secondary">Tashan Gillem</h1>
            <Button />
        </BaseSection>
    )
}
