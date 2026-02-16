'use client'

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { login } from '@/lib/api/login'
import { validateEmail, validatePassword } from '@/utils/validation'

interface FormErrors {
    email?: string
    password?: string
    general?: string
}

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState<FormErrors>({})
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const newErrors: FormErrors = {}

        const emailError = validateEmail(email)
        if (emailError) newErrors.email = emailError

        const passwordError = validatePassword(password)
        if (passwordError) newErrors.password = passwordError

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        try {
            setIsLoading(true)
            setErrors({})

            await login({ email, password })

            alert('Login successful!')
        } catch (err) {
            setErrors({ general: 'Invalid credentials' })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex items-center justify-center bg-muted px-4">
            <Card className="w-full max-w-md shadow-lg">
                <CardHeader className="space-y-1">
                    <CardTitle>
                        <h1 className='text-2xl text-center'>Welcome Back</h1>
                    </CardTitle>
                    <CardDescription className="text-center">
                        Enter your credentials to access your account.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                        {/* Email Field */}
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@example.com"
                                aria-invalid={!!errors.email}
                            />
                            {errors.email && (
                                <p role="alert" className="text-sm text-red-500">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                aria-invalid={!!errors.password}
                            />
                            {errors.password && (
                                <p role="alert" className="text-sm text-red-500">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        {/* General Error */}
                        {errors.general && (
                            <p role="alert" className="text-sm text-red-500 text-center">
                                {errors.general}
                            </p>
                        )}

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Logging in...' : 'Login'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
