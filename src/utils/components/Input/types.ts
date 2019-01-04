import 
  { InputHTMLAttributes
  , ClassAttributes
  , ReactNode
  , DetailedReactHTMLElement
  , HTMLAttributes
  , ReactHTML
  , SVGAttributes
  , ReactSVG
  , ReactSVGElement
  , DOMAttributes
  , DOMElement
  , SFC
  , Attributes
  , SFCElement
  , ClassType
  , ClassicComponent
  , ComponentState
  , ClassicComponentClass
  , CElement
  , Component
  , ComponentClass
  , ReactElement
  } from 'react'

export interface CreateElement
  { ( type: 'input'
    , props?: InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement> | null
    , ...children: ReactNode[]
    ): DetailedReactHTMLElement<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    <P extends HTMLAttributes<T>, T extends HTMLElement>
    
    ( type: keyof ReactHTML
    , props?: ClassAttributes<T> & P | null
    , ...children: ReactNode[]
    ): DetailedReactHTMLElement<P, T>;
    <P extends SVGAttributes<T>, T extends SVGElement>
    
    ( type: keyof ReactSVG
    , props?: ClassAttributes<T> & P | null
    , ...children: ReactNode[]
    ): ReactSVGElement;
    <P extends DOMAttributes<T>, T extends Element>
    
    ( type: string
    , props?: ClassAttributes<T> & P | null
    , ...children: ReactNode[]
    ): DOMElement<P, T>;
    <P>
    
    ( type: SFC<P>
    , props?: Attributes & P | null
    , ...children: ReactNode[]
    ): SFCElement<P>;
    <P>
    
    ( type: ClassType<P, ClassicComponent<P, ComponentState>, ClassicComponentClass<P>>
    , props?: ClassAttributes<ClassicComponent<P, ComponentState>> & P | null
    , ...children: ReactNode[]
    ): CElement<P, ClassicComponent<P, ComponentState>>;
    <P, T extends Component<P, ComponentState>, C extends ComponentClass<P>>
    
    ( type: ClassType<P, T, C>
    , props?: ClassAttributes<T> & P | null
    , ...children: ReactNode[]
    ): CElement<P, T>;
    <P>
    
    ( type: SFC<P> | ComponentClass<P> | string
    , props?: Attributes & P | null
    , ...children: ReactNode[]
    ): ReactElement<P>;
  }