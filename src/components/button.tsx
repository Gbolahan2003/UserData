import * as React from 'react'
import clsx from 'clsx'
import Iconify from './icon'



const variants = {
  primary: 'bg-theme text-white',
  outline: 'bg-white border-2 hover:bg-theme hover:text-white border-theme text-theme',
  black: 'text-white bg-dark',
  suspend:'text-white bg-suspend',
  gray: 'hover:bg-gray-200',
  danger: 'bg-red-600 text-white border-red-600',
  next: "text-xl border h-8 2xl:h-8 w-8",
  approved:'text-green-50 bg-green-900'

}


const sizes = {
  xs: 'px-2 text-xs',
  sm: 'px-1 py-1.5 text-[10px]',
  md: 'px-2.5 py-1.5',
  lg: 'px-10',
  full: 'w-full'
}


type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined }

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  isLoading?: boolean
} & IconProps


export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      startIcon,
      endIcon,
      disabled,
      ...props
    },
    ref
  ) => {

    const isOutlineVariant = variant === 'outline'

    return (
      <button
        ref={ref}
        disabled={disabled}
        type={type}
        className={clsx(
          'flex items-center justify-center sub_text font-semibold gap-2 h-9 2xl:h-10 transition duration-300 rounded-lg disabled:cursor-not-allowed disabled:opacity-70',
          variant === 'primary' && isOutlineVariant && 'border-transparent',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading && <Iconify icon="lucide:loader-2" className="text-3xl animate-spin" />}
        {!isLoading && startIcon}
        {
          !isLoading && (
            <>
              <span className="mx-1">{props.children}</span> {endIcon}
            </>
          )
        }
      </button>
    )
  }
)

Button.displayName = 'Button'