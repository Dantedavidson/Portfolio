import React from 'react'
import {FooterSection, Line, Text, Email} from "./Footer.styles"

function Footer() {
    return (
        <FooterSection>
            <Line/>
            <Text>Created By Dante Davidson Daniele</Text>
            <Email href="mailto:dantedavidsondaniele@gmail.com">dantedavidsondaniele@gmail.com</Email>
        </FooterSection>
    )
}

export default Footer
