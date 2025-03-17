
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Mail, Home, Briefcase, GraduationCap, Edit, Save } from 'lucide-react';
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface ProfileFormValues {
  name: string;
  age: string;
  state: string;
  job: string;
  needs: string;
  email: string;
}

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize form with default values or stored values
  const form = useForm<ProfileFormValues>({
    defaultValues: {
      name: '',
      age: '',
      state: '',
      job: '',
      needs: '',
      email: ''
    }
  });

  // Load profile data from localStorage on component mount
  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      const profileData = JSON.parse(savedProfile) as ProfileFormValues;
      form.reset(profileData);
    }
    setIsLoaded(true);
  }, [form]);

  const onSubmit = (data: ProfileFormValues) => {
    // Save to localStorage
    localStorage.setItem('userProfile', JSON.stringify(data));
    
    // Show success message and exit edit mode
    toast.success("Profile updated successfully!");
    setIsEditing(false);
  };

  // User profile is still loading
  if (!isLoaded) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <p className="text-center py-8">Loading profile...</p>
        </div>
      </Layout>
    );
  }

  // Get name initials for avatar fallback
  const getInitials = () => {
    const name = form.getValues('name');
    return name
      ? name
          .split(' ')
          .map(part => part.charAt(0).toUpperCase())
          .join('')
          .substring(0, 2)
      : 'U';
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-corporate-navy mb-2">
            My Profile
          </h1>
          <p className="text-lg text-gray-600">
            Manage your personal information
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="shadow-md">
              <CardHeader className="flex flex-col items-center text-center pb-2">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarFallback className="bg-corporate-navy text-white text-lg">
                    {getInitials()}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">
                  {form.watch('name') || 'Your Name'}
                </CardTitle>
                <p className="text-gray-500 text-sm mt-1">
                  {form.watch('job') || 'Your Profession'}
                </p>
              </CardHeader>
              <CardContent className="pt-4">
                <Button 
                  onClick={() => setIsEditing(!isEditing)}
                  className="w-full bg-corporate-gold hover:bg-corporate-gold/90 text-white"
                >
                  {isEditing ? (
                    <>
                      <Edit className="mr-2 h-4 w-4" />
                      Cancel Editing
                    </>
                  ) : (
                    <>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Profile
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Personal Information</CardTitle>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="age"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Age</FormLabel>
                              <FormControl>
                                <Input placeholder="Your age" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="state"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>State</FormLabel>
                              <FormControl>
                                <Input placeholder="State where you live" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="job"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Job Type</FormLabel>
                              <FormControl>
                                <Input placeholder="Your profession" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Gmail ID" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="needs"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Learning Needs</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Describe your vocabulary learning goals and needs" 
                                className="min-h-[120px]" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full">
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </Button>
                    </form>
                  </Form>
                ) : (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center mb-2">
                          <User className="h-4 w-4 mr-2 text-corporate-navy" />
                          <Label>Full Name</Label>
                        </div>
                        <p className="text-gray-700">{form.watch('name') || 'Not provided'}</p>
                      </div>
                      
                      <div>
                        <div className="flex items-center mb-2">
                          <GraduationCap className="h-4 w-4 mr-2 text-corporate-navy" />
                          <Label>Age</Label>
                        </div>
                        <p className="text-gray-700">{form.watch('age') || 'Not provided'}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center mb-2">
                          <Home className="h-4 w-4 mr-2 text-corporate-navy" />
                          <Label>State</Label>
                        </div>
                        <p className="text-gray-700">{form.watch('state') || 'Not provided'}</p>
                      </div>
                      
                      <div>
                        <div className="flex items-center mb-2">
                          <Briefcase className="h-4 w-4 mr-2 text-corporate-navy" />
                          <Label>Job Type</Label>
                        </div>
                        <p className="text-gray-700">{form.watch('job') || 'Not provided'}</p>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center mb-2">
                        <Mail className="h-4 w-4 mr-2 text-corporate-navy" />
                        <Label>Email</Label>
                      </div>
                      <p className="text-gray-700">{form.watch('email') || 'Not provided'}</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <GraduationCap className="h-4 w-4 mr-2 text-corporate-navy" />
                        <Label>Learning Needs</Label>
                      </div>
                      <p className="text-gray-700 whitespace-pre-line">
                        {form.watch('needs') || 'Not provided'}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
