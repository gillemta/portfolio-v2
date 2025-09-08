import { BaseSection } from "../ui/BaseSection"
import ContactForm from "../forms/ContactForm"

export function Contact() {
    return (
        <BaseSection id="contact">
            <h2 className="text-primary pb-16 text-center">Contact</h2>
            
            { }
            <div className= "flex justify-center">
                <ContactForm />
            </div>
        </BaseSection>
    )
}
