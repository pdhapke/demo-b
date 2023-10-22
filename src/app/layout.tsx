import { PropsWithChildren } from "react"

export const metadata = {
  title: 'ISU React Demo',
  description: 'A demo for ISU on react',
}

export default (props: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>{props?.children}</body>
    </html>
  )
}
