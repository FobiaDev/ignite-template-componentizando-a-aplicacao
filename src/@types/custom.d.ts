declare module '*.svg' {

  const content: React.FunctionComponent<React.SVGAttributes<SVGSVGElement>>

  export default content
}

declare module '*.svg?url' {

  const content: string

  export default content
}