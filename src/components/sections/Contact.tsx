import { BaseSection } from "../ui/BaseSection"
import ContactForm from "../forms/ContactForm"

export function Contact() {
    return (
        <BaseSection id="contact" className="pb-16">
            <h2 className="text-primary pb-8 text-center">Contact</h2>
            
            { }
            <div className= "flex justify-center">
                <ContactForm />
            </div>
        </BaseSection>
    )
}
