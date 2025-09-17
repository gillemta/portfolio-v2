import { Card } from "../ui/Card"
import { useState } from "react"
import emailjs from '@emailjs/browser'


export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const validateField = (name: string, value: string) => {
        switch (name) {
            case 'name':
                if (!value.trim()) return 'Name is required'
                if (value.length < 2) return 'Name must be at least 2 characters'
                if (value.length > 50) return 'Name must be less than 50 characters'
                return ''
            case 'email':
                if (!value.trim()) return 'Email is required'
                if (!validateEmail(value)) return 'Please enter a valid email'
                return ''
            case 'subject':
                if (!value.trim()) return 'Subject is required'
                if (value.length < 3) return 'Subject must be at least 3 characters'
                if (value.length > 100) return 'Subject must be less than 100 characters'
                return ''
            case 'message':
                if (!value.trim()) return 'Message is required'
                if (value.length < 10) return 'Message must be at least 10 characters'
                if (value.length > 500) return 'Message must be less than 500 characters'
                return ''
            default:
                return ''
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const newErrors = {
            name: validateField('name', formData.name),
            email: validateField('email', formData.email),
            subject: validateField('subject', formData.subject),
            message: validateField('message', formData.message)
        }

        setErrors(newErrors)

        const isValid = Object.values(newErrors).every(error => error === '')

        if (isValid) {
            setIsSubmitting(true)
            setSubmitStatus('idle')

            try {
                const templateParams = {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                }

                await emailjs.send(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                    templateParams,
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                )

                setSubmitStatus('success')
                setFormData({ name: '', email: '', subject: '', message: '' })
                setErrors({ name: '', email: '', subject: '', message: '' })
            } catch (error) {
                console.error('Error sending email:', error)
                setSubmitStatus('error')
            } finally {
                setIsSubmitting(false)
            }
        }
    }

    return (
        <Card size="lg" className="w-full mx-auto">
            { }
            <form className="contact-form text-left" onSubmit={handleSubmit}>
                <div className="contact-form-group">
                    <label htmlFor="name" className="">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full h-8 px-2 border border-gray-200 rounded"
                    />
                    {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
                </div>
                <div className="contact-form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full h-8 px-2 border border-gray-200 rounded"
                    />
                    {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                </div>
                <div className="contact-form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full h-8 px-2 border border-gray-200 rounded"
                    />
                    {errors.subject && <div className="text-red-500 text-sm mt-1">{errors.subject}</div>}
                </div>
                <div className="contact-form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full h-32 px-2 border border-gray-200 rounded"
                    />
                    {errors.message && <div className="text-red-500 text-sm mt-1">{errors.message}</div>}
                        </div>
                <div className="button-container">
                    <button 
                        type="submit" 
                        className="form-button rounded"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Submit'}
                    </button>
                </div>
                
                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                    <div className="text-green-600 text-sm mt-4 text-center">
                        Message sent successfully! I'll get back to you soon.
                    </div>
                )}
                {submitStatus === 'error' && (
                    <div className="text-red-600 text-sm mt-4 text-center">
                        Failed to send message. Please try again.
                    </div>
                )}
            </form>
        </Card>
    )
}