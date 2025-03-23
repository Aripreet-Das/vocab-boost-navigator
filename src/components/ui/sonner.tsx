
import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-corporate-navy group-[.toaster]:border-gray-200 group-[.toaster]:shadow-lg group-[.toaster]:rounded-md",
          title: "group-[.toast]:text-corporate-navy group-[.toast]:font-semibold",
          description: "group-[.toast]:text-gray-800",
          success: "group-[.toaster]:bg-white group-[.toaster]:border-l-4 group-[.toaster]:border-l-green-500 group-[.toaster]:pl-4",
          actionButton:
            "group-[.toast]:bg-corporate-gold group-[.toast]:text-white",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          closeButton: 
            "group-[.toast]:text-gray-600 group-[.toast]:opacity-100",
          icon: 
            "group-[.toast]:text-green-600"
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
