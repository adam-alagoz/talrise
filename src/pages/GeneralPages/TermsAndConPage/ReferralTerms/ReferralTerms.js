import { StyledContainer, StyledText } from './index.styles'
import Text from '../../../../atoms/Text'
import Layout from '../../../../components/GeneralComponents/layout'
import cuate from "../../../../assets/svg/cuate.svg"
import { Image } from './index.styles'

export default function ReferralTerms() {
  return (
    <StyledContainer>
      <Layout variant="half" componentLeft={
        <Image src={cuate} alt="cuate" />
      } componentRight={
        <StyledText>
          <Text>
            TALRISE Referral Program Terms of Service
          </Text>
          <br />
          This limited-time offer is valid as long as it is publicly posted on the Talrise. If Talrise removes the offer, it will expire immediately on the removal date. By participating in the referral bonus, candidates agree to abide by and comply with the terms and conditions when referring new users to the site through the referral offer. Talrise reserves the right to remove or revoke the offer at any time without any obligation to continue providing it.
          <br />
          <br />
          For a referral bonus to be earned, the candidate referred must be a new user of Talrise, not have been previously referred or sourced by Talrise through other means, and have entered the site through a referral link provided by the referrer. The candidate must also be approved as a user within 60 days and be hired for a full-time job within 365 days. Referral bonuses are only paid for full-time placements and are subject to Talrise's discretion. Referring users may not refer existing users or use spam or unsolicited emails to collect referrals. Only one referral bonus will be paid per referred candidate's full-time placement. Referral bonuses will be paid within 60 days of a successful event, but it may take longer.
          <br />
          <br />
          By referring a candidate, you guarantee that you have the full legal authority and prior written consent from the candidate to provide their personal information and contact information to Talrise and that you will defend, indemnify, and hold Talrise harmless from any violation of this guarantee.
          <br />
          <br />
          Talrise has the right to cancel any referral bonus if it determines that the referring user has violated these terms through fraudulent or misleading referral activity or if Talrise terminates the referring user's account for any reason. Referring users may also face legal penalties. Any other violation of these terms, as determined by Talrise, may result in the cancellation of the referral bonus and disqualification from future offers. Eligibility for referral bonuses and exceptions are at the sole discretion of Talrise. Talrise reserves the right to verify eligibility and adjust offers at any time. If any provision of these terms is deemed invalid or unenforceable, it will be modified to the greatest extent allowed by law while the remaining provisions remain in effect. These terms are in addition to Talrise's posted terms of service found at&nbsp;
          <a href="/terms" target="_blank" className="footer-href">
            http://azure.talrise.com/terms
          </a>.
          <br />
          <br />
        </StyledText>
      } />
    </StyledContainer>
  )
}