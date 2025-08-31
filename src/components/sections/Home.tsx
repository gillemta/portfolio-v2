import { Button } from "../ui/Button"
import { BaseSection } from "../ui/BaseSection"

export function Home() {
    return (
        <BaseSection id="home" bgColor="bg-primary">
            <p className="text-secondary m-0">Hello, my name is</p>
            <h1 className="text-secondary m-0 pb-8">Tashan Gillem</h1>
            <Button />
        </BaseSection>
    )
}