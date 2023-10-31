import { LangContext } from "@/context/lang.context";
import { SelectTermsType } from "@/model/props";
import { useContext } from "react";

interface Props {
  selected: SelectTermsType;
}

export default function TermsContent({ selected }: Props) {
  const {
    state: { lang },
  } = useContext(LangContext);

  if (selected === "terms") {
    if (lang === "en") {
      return (
        <>
          <p>Article 1. Introduction</p>

          <p>
            The purpose of the Terms of Service (&quot;Terms&quot;) is to
            prescribe the rights, obligations, and responsibilities of the
            Project and its users in using Beyond the Birthplace services
            (&quot;Services&quot;) provided by project team of Beyond the
            Birthplace. (&quot;Project&quot; or &quot;Project team&quot;)
          </p>

          <p>Article 2. Definitions</p>

          <p>
            The definitions of terms used in these &quot;Terms&quot; are as
            follows, and interpretations of undefined terms are in accordance
            with relevant laws and regulations, the Project team&apos;s Terms
            and Conditions, Privacy Policy, and guidelines separately set by the
            Project team.
          </p>

          <p>
            1. &quot;Services&quot; refers to various services provided by the
            Project team via websites and mobile forms.
          </p>

          <p>
            2. &quot;Users&quot; refers to clients who are using the
            &quot;Service&quot; provided by the Project team after having
            accessed the &quot;Service&quot; and have agreed to these Terms of
            Services.
          </p>

          <p>
            3. &quot;Account&quot; refers to the blockchain wallet address
            inserted by the user after having agreed to these Terms of Services.
          </p>

          <p>
            4. &quot;NFT,&quot; which stands for Non-Fungible Token, refers to
            (i) &quot;digital works,&quot; such as images, videos, music, books,
            etc., that contain metadata, (ii) a blockchain-based digital asset
            that grants owners specific rights (&quot;NFT Owner&apos;s
            Rights&quot;) to the above &quot;digital works.&quot;
          </p>

          <p>
            5. &quot;Digital works&quot; refer to digital artworks, such as
            digital images, videos, music, books, etc., related to NFT.
          </p>

          <p>
            6. &quot;Crypto Wallet&quot; refers to the third-party blockchain
            wallet based on the Ethereum blockchain, provided by the Crypto
            Wallet service, MetaMask.
          </p>

          <p>
            7. &quot;Smart Contract&quot; refers to a collection of code written
            in a language that contains general information, including the
            creation and sale of NFT works operating on the Ethereum mainnet
            environment, the blockchain network for Beyond the Birthplace.
          </p>

          <p>
            8. &quot;NFT Owner&apos;s Rights&quot; refer to the rights notified
            at the time NFT is first sold at Beyond the Birthplace. &quot;NFT
            Owner&apos;s Rights&quot; means the right to use &quot;digital
            works&quot; linked to NFT within a certain limit and does not mean
            acquiring ownership of intellectual property rights, copyrights or
            other rights of the &quot;digital works&quot; itself. The content of
            &quot;NFT Owner&apos;s Rights&quot; may differ for each NFT.
          </p>

          <p>
            9. &quot;Beyond the Birthplace&quot; refers to the service that uses
            artworks from Beyond the Birthplace.
          </p>

          <p>
            10. &quot;Beyond the Birthplace&quot; refers to the service that
            allows a person who owns Beyond the Birthplace to purchase physical
            goods, such as posters and digital displays, rather than digital
            files.
          </p>

          <p>Article 3. Initiation and Revision of the Terms</p>

          <p>
            1. The Project team will post the Terms of Services on the startup
            page so that users can easily notice them
          </p>

          <p>
            2. TheProject team may modify these Terms of Services, provided that
            such modifications will only be made to the extent they do not
            violate any applicable laws.
          </p>

          <p>Article 4. Interpretation of the Terms</p>

          <p>
            1. TheProject team may have additional terms and conditions, or
            operation policies other than these Terms of Service.
          </p>

          <p>
            2. The additional provisions on the webpage shall prevail for
            matters not stipulated in these Terms of Service.
          </p>

          <p>Article 5. NFT Owner&apos;s Rights</p>

          <p>
            1. NFT owners are granted the right to license part of the copyright
            of digital works linked to NFT in accordance with the content of
            &quot;NFT Owner&apos;s Rights&quot;. NFT in itself does not mean
            rights that include intellectual property rights, portrait rights,
            or commercialization rights, and holding NFT does not mean acquiring
            these rights to the linked digital works.
          </p>

          <p>
            2. NFT owners are not authorized to modify the original digital
            works associated with NFT and may use the linked digital works in
            their original form only for personal and non-commercial use.
          </p>

          <p>
            3. &quot;NFT Owner&apos;s Rights&quot; may only be exercised while
            the NFT is legally held, and &quot;NFT Owner&apos;s Rights&quot; is
            recognized for the owner of the NFT at the time of exercising the
            rights. If the NFT is transferred to another person, the person who
            has transferred the NFT may no longer exercise the &quot;NFT
            Owner&apos;s Rights &quot;. &quot;NFT Owner&apos;s Rights&quot; may
            not be guaranteed to anyone who has been transferred the NFT in a
            manner other than that officially supported by the &quot;Project
            team&quot; and/or in violation of the relevant statutes.
          </p>

          <p>Article 6. Use of NFT Service</p>

          <p>
            1. Beyond the Birthplace Service is a service provided in
            conjunction with the Metamask Wallet Service, and can only be used
            by users, who have registered to the Metamask Wallet. By the wallet
            in connection with Beyond the Birthplace Service, User agrees that
            he or she is using the wallet under the terms and conditions of the
            provider of the wallet (Metamask). Wallets are not operated by,
            maintained by, or affiliated with Beyond the Birthplace, and Beyond
            the Birthplace does not have custody or control over the contents of
            User&apos;s wallet and has no ability to retrieve or transfer its
            contents. The provisions of this article describe the contents and
            limitations of the NFT Transaction Service. Users must fully
            understand the matters announced by the Project team in advance
            before using the Service. As long as the problems do not occur due
            to the willful misconduct or negligence of the Project team, the
            Project team shall not be liable for any problems arising from the
            users&apos; insufficient understanding with the relevant matters.
          </p>

          <p>2. NFT Purchasing Service</p>

          <p>
            A. In the case when a single Beyond the Birthplace product is wanted
            by two buyers at the same time, it will be claimed by the buyer who
            applied for the purchase first.
          </p>

          <p>
            B. Once a transaction made by the user as the buyer is complete, it
            cannot be withdrawn. This is the same for purchases made at the
            fault of the user.
          </p>

          <p>3. NFT Transaction Service</p>

          <p>
            A. For NFT transactions, the Project team provides services related
            to the receipt and temporary storage of NFT, as well as Korean
            currency payment service and digital asset payment service. The
            Korean currency payment service within the Service refers to Easy
            Payment Services such as KakaoPay and digit asset payment service
            refers to the virtual currency, Ethereum.
          </p>

          <p>
            B. As the Project team solely supports the execution of NFT
            transactions and Korean currency transactions made in accordance to
            the transaction amount under the conditions set by the user, the
            Project team is not acting on behalf of the buyer nor assisting in
            the implementation of the transaction. In addition, with regards to
            digital asset payment and simple payment systems, the Project team
            has no authority over these services and these are not provided by
            the Project team as a payment system service provider.
          </p>

          <p>
            C. When making Korean currency transactions, the user must be aware
            of the Korean Won and virtual currency exchange rate table on the
            transaction screen, be fully aware of the liquidity of the purchase
            price before participating in the transaction.
          </p>

          <p>
            D. When making Korean currency transactions, users must only use the
            payment method under their own name and must not use the payment
            method of others arbitrarily. The user will be responsible for the
            loss and damage of the Project team, the legitimate owner of the
            payment method, and any third-party related to the payment caused by
            the arbitrary or wrongful use of another person&apos;s payment
            method.
          </p>

          <p>
            E. The user shall bear fully responsibilities and disadvantages
            incurred in connection with the information entered by the user for
            the transactions.
          </p>

          <p>
            F. The Project team may check the details to the user&apos;s legal
            rights to use the payment method submitted by the user, and can stop
            the transaction or cancel the transaction until the confirmation is
            complete.
          </p>

          <p>
            G. The Project team Is not responsible for any transactions that are
            made by any other payment services provided by the Project team.
          </p>

          <p>Article 7. Modifications and Restrictions to the Service</p>

          <p>
            1. The Project team reserves the right in our sole discretion to
            modify all or part of the Service at any time for the improvement of
            the Service.
          </p>

          <p>
            2. TheProject team may restrict or suspend all or part of the
            Services in any of the following cases:
          </p>

          <p>
            A. In the cases of maintenance, inspection, replacement or failure
            or malfunctions of computers, information and communications
            infrastructure.
          </p>

          <p>
            B. In unavoidable cases, due to construction or repairs of
            facilities or infrastructure for Service.
          </p>

          <p>
            C. In cases where the normal use of Service is hindered by a power
            outage, infrastructure malfunction, or congestion in the service
            use.
          </p>

          <p>
            D. In cases where a user interferes with business operations of the
            Project team.
          </p>

          <p>
            E. In cases where the Service can no longer be maintained due to
            various circumstances of the Project team, such as a termination of
            contract with a service provider, management judgment or etc.
          </p>

          <p>
            F. In cases due to force majeure events, such as nature disaster,
            state of national emergency or etc.
          </p>

          <p>
            G. In cases where it is possible to provide further Service due to
            changes in Project team&apos;s business plans or management reasons.
          </p>

          <p>
            3. The Project team shall not be liable for any problems arising
            from the change, restriction, or suspension of services under
            paragraph (1) or (2), unless there were any willful misconduct or
            negligence of the Project team.
          </p>

          <p>Article 8. Service Fees</p>

          <p>
            1. Users shall pay the fee listed below when using Services provided
            by the Project team.
          </p>

          <p>&lt;Service Fee &gt;</p>

          <p>Fee: Blockchain transaction fee (gas fee)</p>

          <p>Rate: Subject to change</p>

          <p>
            Time of Service Fee Charged: When there is a transaction on
            blockchain
          </p>

          <p>Article 9. Return/Exchange/Refund/Cancellation</p>

          <p>
            1. Due to the nature of Beyond the Birthplace Service, which
            includes non-recoverable blockchain and custom-made products, users
            cannot cancel purchased products. However, in these following cases
            after the completion of the transaction of products, return, and
            exchange can be carried out through Beyond the Birthplace
          </p>

          <p>
            A. In cases in which the delivered product is different from the
            order details.
          </p>

          <p>
            B. In cases in which the delivered product is damaged. However, this
            does not include cases where the product is damaged or lost due to
            reasons attributable to the User.
          </p>

          <p>
            3. Users may not request cancellation, refund or exchange of
            products in any of the following cases:
          </p>

          <p>
            A. After transaction has been made for NFT or custom-made products
          </p>

          <p>
            B. In the case, in which the product is lost or damaged due to
            reasons attributable to the User.
          </p>

          <p>Article 10. Change of User Information</p>

          <p>
            1. Users can always access and modify their information through the
            Service. However, restricted information for service management
            cannot be modified.
          </p>

          <p>
            2. The user shall notify the Project team of the change by modifying
            it directly on the Service or by submitting an inquiry via email.
          </p>

          <p>
            3. The Project team shall not be responsible for any disadvantages
            arising from the user&apos;s failure to notify the Project team of
            the changes in the preceding paragraph.
          </p>

          <p>Article 11. Management of User Information</p>

          <p>
            1. The Project team considers the user as a registered user without
            further verification procedure if the virtual wallet registered by
            the user matches the one registered with the Project team.
          </p>

          <p>
            2. The User is responsible for keeping all necessary information for
            the account safely so that no Third-Parties can access the
            user&apos;s account without permission.
          </p>

          <p>
            3. The User shall immediately notify the Project team for the loss,
            theft or disclosure of account information to a Third Party. The
            Project team can immediately suspend the use of the account.
          </p>

          <p>
            4. The Project team is not responsible for any damage caused to the
            User due to the loss, theft, or disclosure of user&apos;s access
            information, such as the user&apos;s virtual wallet. However, this
            is not applicable in the case of misconduct or negligence of the
            Project team.
          </p>

          <p>Article 12. Attribution of Rights</p>

          <p>
            1. All rights, including intellectual property rights to the
            Services provided by the Project team to Users, belong to the
            Project team.
          </p>

          <p>
            2. The User shall not use the information obtained by using the
            Service for profit or use it to a Third Party by means of
            reproduction, transmission, publication, distribution, broadcasting,
            or other means without the prior consent of the Project team.
          </p>

          <p>
            3. With regards to the Service, the Project team grants Users only
            the right to use the Service according to the conditions of use set
            by the Project team, and the User shall not dispose of the right in
            ways of transferring, selling or providing collateral.
          </p>

          <p>Article 13. Protection of Private Information</p>

          <p>
            The Project team collects Users&apos; personal information to a
            minimum and strives to protect the collected information as
            prescribed by relevant laws and regulations, including Act on
            Promotion of Information and Communications Network Utilization and
            Personal Information Protection Act. Laws related to personal
            information protection and the use of personal information applies
            to the Project team&apos;s Privacy Policy. However, the Project
            team&apos;s Privacy Policy does not apply to those that are not
            produced and provided by the Project team or to the screens linked
            to Third-Party websites.
          </p>

          <p>Article 14. Obligations of the Project team</p>

          <p>
            1. The Project team complies with the relevant laws and these Terms
            of Services, and strives to continuously provide Services in a
            stable manner.
          </p>

          <p>
            2. The Project team establishes a security system for private
            information protection, discloses and complies with the Privacy
            Policy, in order to provide the Service in a secure manner, where
            Users can safely use the Service.
          </p>

          <p>
            3. If the Project teamdeems that an opinion or complaint raised by a
            User regarding the use of the Service is justified, it shall handle
            it and deliver the process and results to the User via email.
          </p>

          <p>Article 15. Obligations of the User</p>

          <p>1. User shall refrain from doing the following actions:</p>

          <p>A. Stealing information from others</p>

          <p>B. Changing information posted by the Project team</p>

          <p>
            C. Transmitting or posting of information other than the information
            determined by the Computer (i.e. computer programs)
          </p>

          <p>
            D. Infringing on Intellectual Property Rights, such as copyrights of
            the Project team
          </p>

          <p>
            E. Damaging the reputation of the Project team and other Third
            Parties or interfering with the business
          </p>

          <p>
            F. Using Services in a commercial way without prior consent of the
            Project team.
          </p>

          <p>
            G. Accessing Service through illegal methods, illegally generating
            or increasing the number of exposures and clicks, or illegally
            applying for Service use, and causing a burden on Project
            team&apos;s server
          </p>

          <p>
            H. Collecting other users&apos; personal information or account
            information
          </p>

          <p>I. Other illegal or unjustified actions</p>

          <p>
            2. User shall comply with matters notified by the Project team in
            relation to relevant laws, and Terms of Service and shall not engage
            in any other acts that interfere with the Project team&apos;s work.
          </p>

          <p>Article 16. Restrictions on Usage</p>

          <p>
            1.If the User violates the Project team&apos;s copyright and causes
            damages to the Project team, the User shall resolve it as his or her
            own responsibility and expense, and the Project team shall not bear
            any responsibility.
          </p>

          <p>
            2.The User cannot use the Service for the purpose of infringing on
            the rights of the Project team, including Intellectual Property
            Rights, portrait rights and copyrights of the Project team and the
            User will be responsible for the consequences of the infringements.
          </p>

          <p>
            3. The User shall not use the Project team&apos;s works without
            permission for commercial or other personal gain.
          </p>

          <p>Article 17. Termination of Usage</p>

          <p>
            1. The User can terminate the Service at any time by disconnecting
            the virtual wallet.
          </p>

          <p>
            2. The Project team may set a restriction for a certain time frame
            and request correction for the following reasons. In spite of the
            request for correction, the User&apos;s Service can be terminated if
            not corrected within a considerable period or if the same violation
            is repeated more than twice.
          </p>

          <p>
            A. In cases where the User violates his or her obligations
            prescribed in Article 15 or falls under the grounds for restriction
            of use prescribed in Article 16.
          </p>

          <p>
            B. In cases of providing illegal programs, hacking, distribution of
            malicious programs and exceeding access rights, etc., in violation
            of relevant laws and regulations such as the Act on Provision and
            Operation of Illegal Programs, Promotion of Information and
            Communication Network Utilization, etc.
          </p>

          <p>
            C. In cases of acting or attempting to interfere with the smooth
            progress of the Services provided by the Project team
          </p>

          <p>
            D. In cases of any other reasons corresponding to each subparagraph
            occurs and the Project team deems inappropriate to maintain the
            User&apos;s Service.
          </p>

          <p>
            3. In the event of Service termination pursuant to the preceding
            paragraph, all benefits obtained through the use of the Service will
            be terminated and the Project team does not have to compensate for
            the loss.
          </p>

          <p>
            4. Once the suspension of use is complete, all information of the
            User will be deleted except for the information that the Project
            team must hold in accordance with the Privacy Policy and relevant
            laws.
          </p>

          <p>
            5. Notwithstanding the preceding paragraph, if the Project team
            terminates the Service pursuant to paragraph 2, the Project team may
            keep the User&apos;s information for a certain period of time to
            receive and process the User&apos;s objections and delete the
            User&apos;s information after the period.
          </p>

          <p>Article 18. Limitations of Liability</p>

          <p>
            1. The Project team or the User shall be responsible for
            compensating the other party for damages in violation of these Terms
            of Services. However, this is not the case if there is no intention
            or negligence of the actor.
          </p>

          <p>
            2. In the event of damage to a User due to the following reasons,
            the Project team shall not be liable for the damage if proven that
            necessary action was taken to prevent the User&apos;s damage.
          </p>

          <p>
            A. In the case of wartime, incident, natural disaster, or equivalent
            national emergency, etc.
          </p>

          <p>
            B. In the case compliant with administrative dispositions, orders by
            government agency or by law
          </p>

          <p>
            C In the case of service failure of a communications service Project
            team, such as a key communication service provider, pursuant to the
            Telecommunications Business Act.
          </p>

          <p>
            D. In the case of a Service failure due to defects in outsourcing
            system and affiliated services that cannot be managed by the Project
            team or due to reasons attributable to the User.
          </p>

          <p>
            E. In the case of a Server failure due to a sudden surge in server
            access, etc.
          </p>

          <p>
            F. In the case of a network failure or error while inspecting NFT
            internal system
          </p>

          <p>Article 19. Applicable Act and Jurisdiction</p>

          <p>
            1. Any disputes arising between the Project team and the User shall
            be governed by the laws of Republic of Korea.
          </p>

          <p>
            2. The Seoul Central District Court shall be the competent court for
            litigation in disputes arising between the Project team and the
            User.
          </p>

          <p>- Effective Date: May 3, 2023</p>
        </>
      );
    } else {
      return (
        <>
          <p>제1조 (목적)</p>

          <p>
            이용자(이하 &quot;회원&quot;)가 Beyond the Birthplace(이하
            &quot;프로젝트&quot; 또는 &quot;프로젝트 팀&quot;)가 제공하는 Beyond
            the Birthplace 서비스(이하 &quot;서비스&quot;)를 이용함에 있어
            프로젝트 팀과 회원의 권리, 의무 및 책임 사항을 규정함을 목적으로
            합니다.
          </p>

          <p>제2조 (용어의 정의)</p>

          <p>
            이 약관에서 사용하는 용어의 정의는 다음 각호와 같으며, 정의되지 않은
            용어에 대한 해석은 관계 법령과 프로젝트의 이용약관 및
            개인정보처리방침, 프로젝트 팀이 별도로 정한 지침 등의 상관례에
            의합니다.
          </p>

          <p>
            1. &quot;서비스&quot;라 함은 프로젝트 팀이 웹과 모바일 환경에서
            제공하는 서비스 및 관련 제반 서비스를 의미합니다.
          </p>

          <p>
            2. &quot;회원&quot;이라 함은 프로젝트의 &quot;서비스&quot;에
            접속하여 본 약관에 동의한 후 &quot;프로젝트 팀&quot;이 제공하는
            &quot;서비스&quot;를 이용하는 고객을 말합니다.
          </p>

          <p>
            3. &quot;계정&quot;이라 함은 회원이 본 약관에 동의한 후 입력한 가상
            지갑 주소를 말합니다.
          </p>

          <p>
            4. &quot;NFT&apos;란 대체 불가능한 토큰(NON-FUNGIBLE TOKEN)으로서,
            (I) 이미지, 동영상, 음악, 서적 등의 &quot;디지털 저작물&quot;에 대한
            메타데이터 정보를 포함한 상태로 발행되어, (II) 해당 NFT 소유자에게
            상기 &quot;디지털 저작물&quot;에 관한 특정 권리 (이하 &quot;NFT
            소유자의 권리&quot;)가 부여되는 블록체인 기반의 디지털 자산을
            의미합니다.
          </p>

          <p>
            5. &quot;디지털 저작물&quot;이란, NFT에 연계된 디지털 이미지,
            동영상, 음악, 서적 등의 디지털 저작물을 의미합니다.
          </p>

          <p>
            6. &quot;가상 지갑&quot;이란, 이더리움 기반 가상 자산 지갑 서비스인
            메타마스크 지갑을 의미합니다.
          </p>

          <p>
            7. &quot;스마트 컨트랙트&quot;란, NFT 작품의 생성, 판매를 포함하여
            전반적인 정보를 포함하고 있으며 Beyond the Birthplace의 블록
            체인망인 이더리움 메인 넷 환경 위에서 동작 가능한 언어로 작성된 코드
            모음을 말합니다.
          </p>

          <p>
            8. &quot;NFT 소유자의 권리&quot;란, NFT가 Beyond the Birthplace에서
            최초로 판매되는 시점에 고지된 권리를 의미합니다. &quot;NFT 소유자의
            권리&quot;는 NFT에 연계된 &quot;디지털 저작물&quot;을 일정 한도
            내에서 이용할 수 있는 권한을 의미할 뿐 &quot;디지털 저작물&quot;
            자체에 대한 소유권, 저작권을 포함한 지식 재산권, 기타 권리를
            취득하는 것을 의미하는 것은 아닙니다. 각 NFT 별로 &quot;NFT 소유자의
            권리&quot;의 내용은 다를 수 있습니다.
          </p>

          <p>
            9. &quot;Beyond the Birthplace&quot; 서비스란 고요손 작가의 작품을
            활용해 디지털 형태의 NFT 상품으로 판매하는 서비스를 말합니다.
          </p>

          <p>제3조 (약관의 개시와 개정)</p>

          <p>
            1. &quot;프로젝트 팀&quot;은 이 약관의 내용을 &quot;회원&quot;이
            쉽게 알 수 있도록 웹페이지 초기 화면에 게시합니다
          </p>

          <p>
            2. &quot;프로젝트 팀&quot;은 필요한 경우 관련 법령을 위배하지 않는
            범위에서 이 약관을 개정할 수 있습니다.
          </p>

          <p>제4조 (약관의 해석)</p>

          <p>
            1. &quot;프로젝트 팀&quot;은 이 약관 외에 별도의 운영정책을 둘 수
            있습니다.
          </p>

          <p>
            2. 이 약관에서 정하지 않은 사항이나 해석에 대해서는 웹페이지에
            별도로 규정하는 바를 따릅니다.
          </p>

          <p>제5조 (NFT 소유자의 권리)</p>

          <p>
            1. NFT 를 보유한 자에게는 &quot;NFT 소유자의 권리&quot;의 내용에
            따라 NFT와 연계된 디지털 저작물의 저작재산권의 일부를 라이선스할 수
            있는 권리만이 부여됩니다. NFT는 저작권, 상표권을 포함한 지식
            재산권이나 초상권, 상품화 권리 등의 특정 권리 그 자체를 의미하지
            않으며, NFT를 보유하는 것이 NFT와 연계된 디지털 저작물에 대한 보유
            내지 디지털 저작물에 관한 저작권 등의 권리를 취득하는 것을 의미하지
            않습니다.
          </p>

          <p>
            2. NFT를 보유한 자는 NFT와 연계된 디지털 저작물을 원본을 수정할
            권한이 없고, 디지털 저작물을 그대로 개인적이고 비상업적으로만 이용할
            수 있습니다.
          </p>

          <p>
            3. &quot;NFT 소유자의 권리&quot;는 NFT를 적법하게 보유하고 있는
            동안에만 행사할 수 있으며, &quot;NFT 소유자의 권리&quot;는 권리를
            행사하는 시점에 해당 NFT를 보유한 자에게 인정됩니다. 타인에게 NFT를
            이전한 경우, NFT를 양도한 회원은 &quot;NFT 소유자의 권리&quot;를 더
            이상 행사할 수 없습니다. &quot;프로젝트 팀&quot;이 공식적으로
            지원하는 방식이 아닌 방식 및/또는 관련 법령을 위반하는 방식으로
            NFT를 이전 받은 자에게는 &quot;NFT 소유자의 권리&quot;가 보장되지
            않을 수 있습니다.
          </p>

          <p>제6조 (NFT 서비스의 이용)</p>

          <p>
            1. Beyond the Birthplace 서비스는 메타마스크 지갑 서비스와 연동되어
            제공되는 서비스로, 메타마스크 지갑 등록을 거친 회원에 한하여 사용할
            수 있습니다. Beyond the Birthplace 서비스와 관련하여 가상 지갑을
            사용함으로써 귀하는 해당 지갑 공급자의 약관에 따라 지갑을 사용하는데
            동의합니다. 가상 지갑은 Beyond the Birthplace에 의해 운영되거나
            유지되지 않으며, Beyond the Birthplace는 지갑의 내용에 대한 보관이나
            통제권을 가지고 있지 않으며 지갑의 내용물을 검색하거나 이전할 수
            없습니다. 본 조의 규정은 NFT 거래 서비스의 내용과 제한에 대해
            기술합니다. 회원은 프로젝트 팀이 공지한 사항을 사전에 충분히
            이해하고 서비스를 이용하여야 합니다. 프로젝트 팀는 회원이 관련
            사항을 충분히 숙지하지 아니하여 발생하는 문제에 대해서는 프로젝트
            팀의 고의 또는 과실이 없는 한 어떠한 책임도 지지 않습니다.
          </p>

          <p>2. NFT 구매 서비스</p>

          <p>
            가. 만약 동일한 Beyond the Birthplace상품에 동시에 구매신청이 생길
            경우, 상품은 가장 먼저 구매를 신청한 구매자에게 제공됩니다.
          </p>

          <p>
            나. 회원이 구매자로서 행한 거래가 완료된 경우 철회가 불가합니다.
            이는 회원의 과실로 구매한 경우에도 동일합니다.
          </p>

          <p>3. NFT 결제 서비스</p>

          <p>
            가. 프로젝트 팀은 NFT 거래 시 NFT의 수령, 임시 보관 등을 포함하여
            원화 결제 서비스와 디지털 자산 결제 서비스를 제공합니다. 본 서비스
            내의 원화 결제 서비스란 간편결제 시스템(예. 계좌이체)를 의미하며
            디지털 자산 결제 서비스는 가상화폐 이더리움을 의미합니다.
          </p>

          <p>
            나. 프로젝트 팀은 회원이 정한 조건으로 NFT 거래와 거래 금액에 따른
            원화 지급이 이루어지는 거래의 실행을 지원하는 것이므로 구매자를
            대리, 대행하거나 그 이행을 보조하는 것은 아닙니다. 또한 디지털 자산
            결제 서비스와 간편결제 시스템과 관련하여 프로젝트 팀은 이에 관한
            권한이 전혀 없고, 이는 결제 시스템 서비스 제공자의 서비스로서
            프로젝트 팀이 제공하는 서비스가 아닙니다.
          </p>

          <p>
            다. 회원은 원화 결제 시, 거래 화면에 표기되어 있는 원화-가상화폐
            환율 표를 인지하고 구매 가격의 유동성에 대해 완전히 숙지하고 거래에
            참여해야 합니다.
          </p>

          <p>
            라. 회원은 원화 결제수단을 사용함에 있어 반드시 본인 명의의 결제
            수단을 사용하여야 하며, 타인의 결제 수단을 임의로 사용하여서는 안
            됩니다. 타인의 결제 수단을 임의 사용함으로써 발생하는 프로젝트 팀,
            결제수단의 적법한 소유자, 결제 관련 제3자의 손실과 손해에 대한
            책임은 회원에게 있습니다.
          </p>

          <p>
            마. 결제와 관련하여 회원이 입력한 정보 및 그 정보와 관련하여 발생한
            책임과 불이익은 회원이 부담하여야 합니다.
          </p>

          <p>
            바. 프로젝트 팀은 회원이 사용하는 결제수단에 대하여 정당한 사용
            권한이 있는지 확인할 수 있고, 이에 대한 확인이 완료될 때까지 해당
            거래의 진행을 중지하거나 해당 거래를 취소할 수 있습니다.
          </p>

          <p>
            사. 프로젝트 팀이 제공하는 결제 서비스를 이용하지 않은 거래에 대해
            프로젝트 팀은 일체의 책임을 지지 않습니다.
          </p>

          <p>제7조 (서비스의 변경 및 제한)</p>

          <p>
            1. 프로젝트 팀은 서비스의 향상을 위하여 서비스의 전부 또는 일부
            내용을 변경할 수 있습니다.
          </p>

          <p>
            2. 프로젝트 팀은 다음 각 호의 어느 하나에 해당하는 경우 서비스의
            전부 또는 일부를 제한하거나 중단할 수 있습니다.
          </p>

          <p>
            가. 컴퓨터 등 정보통신 설비의 보수점검·교체 및 고장, 통신의 두절
            등의 사유가 발생한 경우
          </p>

          <p>나. 서비스를 위한 설비의 보수 등 공사로 인해 부득이한 경우</p>

          <p>
            다. 정전, 제반 설비의 장애 또는 서비스 이용의 폭주 등으로 정상적인
            서비스 이용에 지장이 있는 경우
          </p>

          <p>라. 회원이 프로젝트의 영업활동에 방해하는 경우</p>

          <p>
            마. 서비스 제공업자와의 계약 종료, 경영상의 판단 등과 같은 프로젝트
            팀의 제반 사정으로 서비스를 유지할 수 없는 경우
          </p>

          <p>바. 기타 천재지변, 국가비상사태 등 불가항력적 사유가 있는 경우</p>

          <p>
            사. 프로젝트의 사업 계획의 변경 또는 경영상의 사유로 더 이상의
            서비스 제공이 불가능할 경우
          </p>

          <p>
            3. 프로젝트 팀은 제1항 또는 제2항에 따른 서비스의 변경, 제한,
            중단으로 발생하는 문제에 대하여 프로젝트 팀의 고의 또는 중대한
            과실이 없는 한 어떠한 책임도 지지 않습니다.
          </p>

          <p>제8조(서비스 수수료)</p>

          <p>
            1. 회원은 프로젝트 팀이 제공하는 서비스를 이용하는 경우 이용 수수료
            표에 기재된 수수료를 지급해야 합니다. 서비스 이용 수수료는 회원의
            서비스 화면에 명시되어 있습니다.
          </p>

          <p>&lt;서비스 이용 수수료&gt;</p>

          <p>- 수수료명: 블록체인 이용료(GAS FEE)</p>

          <p>- 수수료(율): 상시 변경</p>

          <p>- 수수료 지급 시점: 블록체인 상 트랜잭션 발생 시</p>

          <p>제9조 (반품/교환/환불/취소)</p>

          <p>
            1. 복구 불가한 블록체인 특성이 포함되는 Beyond the Birthplace 서비스
            특성상 회원은 상품에 대한 구매 취소를 할 수 없습니다. 다만, 실물
            작품에 대한 거래 완료 시 반품 및 교환은 다음의 경우에 해당하며,
            프로젝트 팀을 통해 조취를 취합니다.
          </p>

          <p>가. 배송된 상품이 주문 내용과 상이한 경우</p>

          <p>
            나. 배송된 상품이 파손, 손상되었을 경우. 단, 회원의 책임 있는 사유로
            상품이 훼손 또는 멸실된 경우는 제외합니다.
          </p>

          <p>
            3. 회원은 다음 각 호의 경우에는 취소 및 환불 또는 상품교환을 요청할
            수 없습니다.
          </p>

          <p>가. NFT 결제 또는 실물 작품 결제가 완료된 후</p>

          <p>나. 회원의 귀책사유로 인하여 상품이 멸실·훼손된 경우</p>

          <p>제10조 (회원 정보의 변경)</p>

          <p>
            1. 회원은 서비스를 통하여 언제든지 본인의 정보를 열람할 수 있습니다.
          </p>

          <p>
            2. 회원은 서비스 이용 시 기재한 사항이 변경되었을 경우 문의 메일을
            통하여 프로젝트 팀에 변경 사항을 통지하여야 합니다.
          </p>

          <p>
            3. 회원이 전항의 변경 사항을 프로젝트 팀에 통지하지 않아 발생한
            불이익에 대하여 프로젝트 팀은 책임을 지지 않습니다.
          </p>

          <p>제11조 (회원 정보의 관리)</p>

          <p>
            1. 프로젝트 팀은 회원이 등록한 가상지갑 등이 해당 프로젝트에 등록된
            것과 일치할 경우에는 별도의 확인 절차 없이 이용자를 회원으로
            간주합니다.
          </p>

          <p>
            2. 회원은 본인의 허가를 받지 않은 제3자가 회원의 계정에 무단으로
            접근하지 않도록, 계정 접근을 위해 필요한 일체의 정보를 안전하게
            보관할 책임이 있습니다.
          </p>

          <p>
            3. 회원은 계정 접근 정보를 분실했거나, 도용 당했거나, 제3자에게
            공개되었음을 인지한 경우 이를 즉시 프로젝트 팀에 통지해야 합니다.
            프로젝트 팀은 즉시 계정 이용 중단 등의 조처를 할 수 있습니다.
          </p>

          <p>
            4. 회원의 가상 지갑 등 접근 정보가 분실, 도용 혹은 공개되어 회원에게
            발생한 손해에 대하여 프로젝트 팀은 책임을 부담하지 아니합니다. 다만,
            프로젝트 팀의 고의 또는 과실에 의한 경우에는 그러하지 아니합니다.
          </p>

          <p>제12조 (권리의 귀속)</p>

          <p>
            1. 프로젝트 팀이 회원에게 제공하는 서비스에 대한 지식 재산권을
            포함한 일체의 권리는 프로젝트 팀에 귀속됩니다.
          </p>

          <p>
            2. 회원은 서비스를 이용함으로써 얻은 정보를 프로젝트 팀의 사전 승낙
            없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리 목적으로
            이용하거나 제3자에게 이용하게 하여서는 안됩니다.
          </p>

          <p>
            3. 프로젝트 팀은 서비스와 관련하여 회원에게 프로젝트 팀이 정한
            이용조건에 따라 서비스를 이용할 수 있는 이용권만을 부여하며, 회원은
            이를 양도, 판매, 담보 제공 등의 처분행위를 할 수 없습니다.
          </p>

          <p>제13조 (개인정보의 보호)</p>

          <p>
            프로젝트 팀은 정보통신망 이용 촉진 및 정보보호 등에 관한 법률,
            개인정보 보호법 등 관련 법령이 정하는 바에 따라 회원의 개인정보를
            최소한으로 수집하며 수집된 정보는 보호하기 위해 노력합니다.
            개인정보의 보호 및 이용에 대해서는 관련 법령 및 프로젝트 팀의
            개인정보처리 방침이 적용됩니다. 다만, 프로젝트 팀이 제작하여 제공한
            화면 이외의 외부로 링크된 화면 등에서는 프로젝트 팀의 개인정보처리
            방침이 적용되지 않습니다.
          </p>

          <p>제14조 (프로젝트 팀의 의무)</p>

          <p>
            1. 프로젝트 팀은 관련 법령과 이 약관을 준수하며, 계속적이고
            안정적으로 서비스를 제공하기 위하여 최선을 다하여 노력합니다.
          </p>

          <p>
            2. 프로젝트 팀에는 회원이 안전하게 서비스를 사용할 수 있도록
            개인정보 (신용정보 포함) 보호를 위해 보안 시스템을 갖출 수 있으며,
            개인정보처리 방침을 공시하고 준수합니다.
          </p>

          <p>
            3. 프로젝트 팀은 서비스 이용과 관련하여 회원으로부터 제기된 의견이나
            불만이 정당하다고 인정할 경우에는 이를 처리하여야 하며, 전자우편을
            통하여 회원에게 처리 과정 및 결과를 전달할 수 있습니다.
          </p>

          <p>제15조 (회원의 의무)</p>

          <p>1. 회원은 아래의 행위를 하여서는 안 됩니다.</p>

          <p>가. 타인의 정보 도용</p>

          <p>나. 프로젝트 팀이 게시한 정보의 변경</p>

          <p>
            다. 프로젝트 팀이 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의
            송신 또는 게시
          </p>

          <p>라. 프로젝트 팀의 저작권 등 지적 재산권에 대한 침해</p>

          <p>
            마. 프로젝트 팀 및 기타 제3자의 명예를 손상하거나 업무를 방해하는
            행위
          </p>

          <p>
            바. 프로젝트 팀의 사전 동의 없이 영리를 목적으로 서비스를 사용하는
            행위
          </p>

          <p>
            사. 부정한 방법을 통하여 서비스에 접속하는 행위, 노출 횟수 및 클릭
            횟수를 부정하게 생성하거나 증가시키는 행위, 서비스 이용 신청을 하는
            행위, 프로젝트 팀의 서버에 부하를 일으키는 행위
          </p>

          <p>아. 다른 회원의 개인정보 및 계정 정보를 수집하는 행위</p>

          <p>자. 기타 불법적이거나 부당한 행위</p>

          <p>
            2. 회원은 관계 법령, 이용약관 및 서비스와 관련하여 프로젝트 팀이
            공지하거나 통지한 사항 등을 준수하여야 하며, 기타 프로젝트 팀의
            업무에 방해되는 행위를 하여서는 안 됩니다.
          </p>

          <p>제16조 (이용 방법의 제한)</p>

          <p>
            1. 회원이 프로젝트 팀의 저작권을 침해하여 발생하여 프로젝트 팀
            손해가 발생한 경우 본인의 책임과 비용으로 이를 해결하여야 하며,
            프로젝트 팀은 이에 대하여 어떠한 당사자에게도 책임을 부담하지
            않습니다.
          </p>

          <p>
            2. 회원은 프로젝트 팀의 초상권, 저작권 등 지적 재산권 및 기타 권리를
            침해하는 목적으로 서비스를 이용할 수 없으며, 프로젝트 팀의 권리를
            침해하는 행위로 인하여 발생하는 결과에 대한 모든 책임은 회원
            본인에게 있습니다.
          </p>

          <p>
            3. 회원은 프로젝트 팀의 저작물을 무단으로 상업적이거나 기타 개인적인
            이익을 위한 용도로 사용할 수 없습니다.
          </p>

          <p>제17조 (이용의 중단)</p>

          <p>
            1. 회원은 언제든지 가상 지갑 연결 해지를 통해 이용을 중단하실 수
            있습니다.
          </p>

          <p>
            2. 프로젝트 팀은 회원에게 다음과 같은 사유가 발생할 경우 시간을
            정하여 서비스 이용을 제한함과 동시에 시정 요구를 할 수 있습니다.
            시정 요구에도 불구하고 상당한 기간 내에 시정되지 않거나 2회 이상
            반복적으로 같은 위반행위를 하는 경우에는 이용을 중단할 수 있습니다.
          </p>

          <p>
            가. 본 약관 제15조에 규정된 회원의 의무를 위반하거나 제16조에 규정된
            이용 제한 사유에 해당하는 경우
          </p>

          <p>
            나. 저작권법을 위반한 불법 프로그램의 제공 및 운영 방해, 정보통신망
            이용 촉진 및 정보보호 등에 관한 법률을 위반한 불법 통신 및 해킹,
            악성 프로그램의 배포, 접속 권한 초과 행위 등과 같이 관련 법령을
            위반한 경우
          </p>

          <p>
            다. 프로젝트 팀이 제공하는 서비스의 원활한 진행을 방해하는 행위를
            하거나 시도한 경우
          </p>

          <p>
            라. 그 밖에 각호에 준하는 사유가 발생한 경우 및 프로젝트 팀이
            이용계약을 유지하는 것이 적절하지 않다고 판단하는 경우
          </p>

          <p>
            3. 전 항에 따른 이용 중단 시 서비스 이용을 통해 획득한 모든 혜택이
            소멸하며, 프로젝트 팀은 이에 대해 별도로 보상하지 않습니다.
          </p>

          <p>
            4. 이용 중단이 완료되는 경우 관련 법령 및 개인정보처리 방침에 따라
            프로젝트 팀이 보유하여야 하는 정보를 제외한 회원의 모든 정보가
            삭제됩니다.
          </p>

          <p>
            5. 전 항에도 불구하고 제2항에 따라 프로젝트 팀이 이용을 중단하는
            경우 프로젝트 팀은 회원의 이의신청 접수 및 처리 등을 위하여 일정
            기간 회원의 정보를 보관할 수 있으며, 해당 기간이 지난 후에 회원의
            정보를 삭제합니다.
          </p>

          <p>제18조 (책임 제한)</p>

          <p>
            1. 프로젝트 팀 또는 회원은 본 약관을 위반하여 상대방에게 손해를 입힌
            경우에는 그 손해를 배상할 책임이 있습니다. 다만, 행위자의 고의 또는
            과실이 없는 경우에는 그러하지 아니합니다.
          </p>

          <p>
            2. 다음과 같은 사유로 회원에게 손해가 발생하였을 경우, 프로젝트 팀이
            회원의 손해 발생을 방지하기 위하여 필요한 관리자의 주의를 다하였음을
            입증한 때에는 그 손해에 대하여 책임을 지지 아니합니다.
          </p>

          <p>
            가. 전시, 사변, 천재지변, 또는 이에 준하는 국가 비상사태 등의 경우
          </p>

          <p>
            나. 정부 기관의 사실상 또는 법률상 행정처분 및 명령 등에 대한 준수로
            인한 경우
          </p>

          <p>
            다. 전기통신사업법에 의한 기간 통신 사업자를 포함한 통신서비스
            업체의 서비스 장애로 인한 경우
          </p>

          <p>
            라. 프로젝트 팀이 관리할 수 없는 외주 시스템 및 제휴 서비스의 하자
            또는 이용자 측 귀책사유로 인하여 서비스에 장애가 발생한 경우
          </p>

          <p>
            마. 순간적인 서비스 접속 증가 등으로 인한 서버의 장애가 발생한 경우
          </p>

          <p>
            바. 서비스 내 저작물 등록시스템, NFT 저작물 조회를 위한 네트워크
            장애 또는 오류가 발생한 경우
          </p>

          <p>제19조 (준거법 및 재판관할)</p>

          <p>
            1. 프로젝트 팀과 회원 간 발생한 분쟁에 대하여는 대한민국 법을
            준거법으로 합니다.
          </p>

          <p>
            2. 프로젝트 팀과 회원 간 발생한 분쟁에 관한 소송의 관할법원은
            서울중앙지방법원으로 합니다.
          </p>

          <p>- 시행 일자 : 2023년 7월 25일</p>
        </>
      );
    }
  } else {
    if (lang === "en") {
      return (
        <>
          <p>
            Beyond the Birthplace(hereinafter referred to as
            &quot;Project&quot;) considers the protection of users&apos;
            personal information very important and is doing its best to protect
            the personal information provided to the Project for the use of the
            Project&apos;s services (NFT sales and related services).
            Accordingly, the Project complies with laws and regulations related
            to personal information protection, such as the Personal Information
            Protection Act. This Privacy Policy can be changed in accordance
            with the relevant laws and the Project&apos;s internal policy. When
            it is revised, the revision can be easily noticed through version
            management.
          </p>

          <p>
            Article 1. Collected Personal Information &amp; Use of the Collected
            Personal Information
          </p>

          <p>
            Users may access the Project&apos;s Services without any need to
            subscribe as members. The Project processes the User&apos;s personal
            information to the members for the following purposes. The personal
            information being processed will not be used for any other purposes,
            and if the purpose of use is changed, necessary measures will be
            implemented, such as obtaining separate consent under Article 18 of
            the Personal Information Protection Act.
          </p>

          <p>
            1. Only virtual wallet addresses are required to be collected when
            applying for Service use.
          </p>

          <p>
            2. User&apos;s name, phone number, shipping address, email address
            and etc. may be collected for the shipment of the ordered products
            by the User.
          </p>

          <p>
            3. Names, phone numbers, email addresses, and etc. may be collected
            to provide new customized services, validation of current Service,
            opportunities to participate in event and advertising information.
          </p>

          <p>
            4. When User makes an inquiry while using the Service or to submit a
            report of infringement of rights, email address may be collected in
            the process of receiving and resolving the inquiry.
          </p>

          <p>
            5. Additional log information and service usage record may be
            collected.
          </p>

          <p>Article 2. Method of Collecting Personal Information</p>

          <p>
            1. If the User agrees to providing personal information and enters
            the information voluntarily while using the Service, the relevant
            personal information is collected.
          </p>

          <p>
            2. The User&apos;s personal information can be collected via email
            during consultation process through Customer Help Center.
          </p>

          <p>
            3. Personal Information can be provided by external companies or
            organizations affiliated with the Project, and in such case,
            personal information is collected after obtaining consent from the
            user from the affiliated Project.
          </p>

          <p>Article 3. Use and Retention of Personal Information</p>

          <p>
            In principle, User&apos;s personal information is destroyed without
            delay once the purpose of its use has been achieved. However, for
            the following reasons, the personal information can be retained for
            the specified period:
          </p>

          <p>
            1. Where it is stored separately in accordance with legal standards.
          </p>

          <p>
            A. Records on withdrawal of contracts or subscriptions: 5 years (Act
            on Consumer Protection in Electronic Commerce, etc.)
          </p>

          <p>
            B. Records on payment and supply of goods: 5 years (Act on Consumer
            Protection in Electronic Commerce, etc.).
          </p>

          <p>
            C. Records on the handling of consumer complaints or disputes: 3
            years (Act on Consumer Protection in Electronic Commerce, etc.).
          </p>

          <p>
            D. Books and documentary evidence for all transactions prescribed by
            the tax law: 5 years (Basic National Tax Act)
          </p>

          <p>
            E. Records on Labeling/Advertising: 6 months (Act on Consumer
            Protection in Electronic Commerce, etc.) bar.
          </p>

          <p>
            F. Records on Electronic Financial Transactions: Five Years
            (Electronic Financial Transactions Act)
          </p>

          <p>
            G. Service visit records: 3 months (Communication Secret Protection
            Act).
          </p>

          <p>Article 4. Consignment of Personal Information</p>

          <p>
            1. The Project consigns personal information to external companies
            to perform some necessary tasks in order to provide the Service. The
            Project manages and supervises the consigned Company so that it does
            not violate any relevant laws and regulations.
          </p>

          <p>2. The Project consigns the following personal information.</p>

          <table>
            <colgroup>
              <col></col>
            </colgroup>
            <tbody>
              <tr>
                <td>
                  <p>Consigned Company</p>
                </td>
                <td>
                  <p>Purpose of Consignment</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Amazon Web Services(AWS)</p>
                  <p>Cafe24</p>
                </td>
                <td>
                  <p>Provision of IT infrastructure</p>
                </td>
              </tr>
            </tbody>
          </table>

          <p>Article 5. Destruction of Personal Information</p>

          <p>
            In principle, User&apos;s personal information is destroyed without
            delay once the purpose of collecting and using personal information
            has been achieved. The procedure and method of destroying personal
            information are as follows.
          </p>

          <p>1. Destruction procedure</p>

          <p>
            A) The information entered by the user for membership registration
            is transferred to a separate DB once the purpose has been achieved
            (in the case of paper, transferred to a separate document storage)
            and stored for a certain period of time according to the internal
            policy and other related laws.
          </p>

          <p>
            B) Personal information is not used for any other purposes other
            than the stated purpose, unless it is stored separately for legal
            standards.
          </p>

          <p>2. Method of Destruction</p>

          <p>
            A) Personal information printed on paper is destroyed by grinding or
            incineration
          </p>

          <p>
            B) Personal information stored in the form of an electronic file is
            deleted using a technical method that cannot be restored.
          </p>

          <p>
            Article 6. Rights of Users and Legal Representatives and Exercising
            the Rights
          </p>

          <p>
            1. Users can view or update their personal information and request
            access to their personal information at any time.
          </p>

          <p>
            2. If User requests correction of errors in his/her personal
            information, the relevant personal information will not be used or
            provided until the correction is made.
          </p>

          <p>
            3. In the case where incorrect personal information has been
            provided to a third party, the Project will notify the third party
            of the corrected information without delay to ensure that the
            necessary correction is made.
          </p>

          <p>
            4. The Project processes personal information terminated or deleted
            at the request of User in pursuant to the Use and Retention of
            Personal Information and such personal information will not be
            accessible or available of any other purposes.
          </p>

          <p>
            Article 7. Information about Automated Collection of Personal
            Information
          </p>

          <p>
            The Project uses ‘COOKIE&apos;, which automatically stores usage
            information and brings it up to provide convenience for users.
            Cookies are small amounts of information that a website sends to a
            computer browser (such as Internet Explorer.
          </p>

          <p>1. Purpose of COOKIE</p>

          <p>
            Through Cookies, users can store their preferred settings to support
            a faster web environment and use them to improve services for
            convenient use.
          </p>

          <p>2. Installation, Operation and Refusal of Cookies</p>

          <p>
            Users have the option to install Cookies and can refuse or delete
            them at any time.
          </p>

          <p>3. How to Reject Cookie Settings</p>

          <p>
            - Internet Explorer: Select Tools &gt; Internet Options &gt; Privacy
            &gt; Advanced Privacy &gt; Cookie Level Settings
          </p>

          <p>
            - Chrome: Select Settings &gt; Display Advanced Settings &gt;
            Privacy &gt; Cookie and Other Side Data &gt; Cookie Level Settings
          </p>

          <p>
            - Safari: Select Preferences &gt; Privacy &gt; Cookies and Web Site
            Data Settings
          </p>

          <p>
            Refusing all cookies may bring difficulties in using some Services
            that require login.
          </p>

          <p>Article 8. Actions Taken to Protect Personal Information</p>

          <p>
            The Project is taking the following measures to protect personal
            information.
          </p>

          <p>
            1. Management Measures: implementation of internal management plans,
            regular employee training, etc.
          </p>

          <p>
            2. Technical Measures: Management of access rights for personal
            information processing systems, installation of access control
            systems, encryption of unique identification information,
            installation of security programs, etc.
          </p>

          <p>
            3. Physical Measures: Control access to computer rooms, data storage
            rooms, etc.
          </p>

          <p>Article 9. Chief Privacy Officer</p>

          <p>
            The Project has designated the following person as the Chief Privacy
            Officer to remain responsible for responding to User inquiries
            regarding personal information and resolving any related complaints.
          </p>

          <p>[Chief Privacy Officer]</p>

          <p>- Name: Goyoson </p>

          <p>- Affiliation: Beyond the Birthplace</p>

          <p>- Email: beyondthebirthplace.kr@gmail.com</p>

          <p>Article 10. Report or Consult on Infringements</p>

          <p>
            If User needs to report of consult on other privacy infringements,
            please contact the following institutions.
          </p>

          <p>
            - Privacy Infringement Report Center (privacy.kisa.or.kr/Phone
            no.118)
          </p>

          <p>
            - Personal Information Dispute Mediation Committee
            (http://kopico.go.kr / Phone no. 1833-6972)
          </p>

          <p>
            - Cyber Crime Investigation Unit, Supreme Prosecutor&apos;s Office
            (spo.go.kr/Phone no.1301)
          </p>

          <p>
            - Cyber Bureau of Investigation, National Police Agency
            (police.go.kr/Phone no. 182)
          </p>

          <p>Article 11. Liability for Link Sites</p>

          <p>
            The Project can provide users with links to other external sites. In
            this case, the Project does not have control over the external site,
            so cannot be responsible for the usefulness, authenticity, or
            legality of services or data provided by the external site to users.
            The privacy policy of the linked external site is irrelevant to the
            Project so please check the policy of the external site.
          </p>

          <p>Article 12. Obligation to Notify Prior to Amendment</p>

          <p>
            Users will be notified of any addition, deletion, and/or
            modification in this Privacy Policy through the Website at least 7
            days prior to the scheduled amendment.
          </p>

          <p>- Notification Date: July 25, 2023</p>

          <p>- Effective Date: July 25, 2023</p>
        </>
      );
    } else {
      return (
        <>
          <p>
            Beyond the Birthplace(이하 ‘프로젝트&apos; 및 ‘프로젝트 팀&apos;)는
            이용자의 개인정보 보호를 매우 중요하게 생각하며, 이용자가 프로젝트의
            서비스 (NFT판매 및 이와 관련된 제반 서비스)를 이용하기 위해 프로젝트
            팀에게 제공한 개인정보 보호에 최선을 다하고 있습니다. 이에 프로젝트
            팀은 &quot;개인정보 보호법&quot; 등 개인정보 보호와 관련된 법령을
            준수하고 있습니다. 본 개인정보처리 방침은 관계 법령 및 프로젝트 팀의
            내부 방침에 따라 변경될 수 있으며, 개정 시 버전 관리를 통하여
            개정사항을 쉽게 확인할 수 있도록 정보를 제공하고 있습니다.
          </p>

          <p>제1조 (개인정보 수집 항목 및 이용 목적)</p>

          <p>
            프로젝트가 제공하는 서비스는 개인정보를 수집하는 회원가입 절차 없이
            콘텐츠에 접근할 수 있습니다. 프로젝트 팀은 회원에게 다음 목적을 위해
            이용자 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적
            이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는
            개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를
            이행할 예정입니다.
          </p>

          <p>
            1. 서비스 사용 신청 시 가상 지갑 주소만 필수 항목으로 수집합니다.
          </p>

          <p>
            2. 회원이 구매하는 NFT의 실물 작품 배송을 위해 이름, 휴대 전화 번호,
            배송지, 이메일 주소 등을 수집할 수 있습니다.
          </p>

          <p>
            3. 서비스를 이용하면서 이용 문의를 하거나, 권리 침해 신고를 접수하는
            경우에는 문의 접수 및 해결 과정에서 이메일 주소를 수집할 수
            있습니다.
          </p>

          <p>
            4. 이외에도 추가적으로 로그 정보, 서비스 이용 기록 등이 수집될 수
            있습니다.
          </p>

          <p>제2조 (개인정보의 수집 방법)</p>

          <p>
            1. 서비스 이용 과정에서 이용자가 개인정보 수집에 관해 동의를 하고
            직접 정보를 입력하는 경우, 해당 개인정보를 수집합니다.
          </p>

          <p>
            2. 고객센터를 통한 상담 과정에서 이메일을 통해 이용자의 개인정보가
            수집될 수 있습니다.
          </p>

          <p>제3조 (개인정보의 보유 및 이용 기간)</p>

          <p>
            이용자의 개인정보는 원칙적으로 개인정보의 수집에 대한 이용 목적 달성
            시 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로
            명시한 기간동안 보존합니다.
          </p>

          <p>1. 법령 기준에 따라 별도 보관하는 경우</p>

          <p>
            가. 계약 또는 청약 철회 등에 관한 기록: 5년(전자상거래 등에서의
            소비자보호에 관한 법률)
          </p>

          <p>
            나. 대금 결제 및 재화 등의 공급에 관한 기록: 5년(전자상거래
            등에서의소비자 보호에 관한 법률)
          </p>

          <p>
            다. 소비자의 불만 또는 분쟁 처리에 관한 기록: 3년(전자상거래
            등에서의소비자 보호에 관한 법률)
          </p>

          <p>
            라. 세법이 규정하는 모든 거래에 관한 장부 및 증빙서류:
            5년(국세기본법)
          </p>

          <p>
            마. 표시/광고에 관한 기록: 6개월(전자상거래 등에서의 소비자 보호에
            관한법률)
          </p>

          <p>바. 전자금융 거래에 관한 기록: 5년 (전자금융거래법)</p>

          <p>사. 서비스 방문 기록: 3개월(통신비밀보호법).</p>

          <p>제4조 (개인정보의 처리위탁)</p>

          <p>
            1. 프로젝트 팀은 서비스 제공에 있어 필요한 업무 중 일부를 외부
            업체가 수행하도록 개인정보를 위탁하고 있습니다. 그리고 위탁 받은
            업체가 관계 법령을 위반하지 않도록 관리·감독하고 있습니다.
          </p>

          <p>
            2. 프로젝트 팀은 다음과 같이 개인정보 처리 업무를 위탁하고 있습니다.
          </p>

          <table>
            <colgroup>
              <col></col>
            </colgroup>
            <tbody>
              <tr>
                <td>
                  <p>수탁업체</p>
                </td>
                <td>
                  <p>위탁 목적</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Amazon Web Services(AWS)</p>

                  <p>카페24</p>
                </td>
                <td>
                  <p>IT인프라 제공</p>
                </td>
              </tr>
            </tbody>
          </table>

          <p>제5조 (개인정보의 파기)</p>

          <p>
            이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용 목적이
            달성되면 지체 없이 파기합니다. 개인정보 파기 절차 및 방법은 다음과
            같습니다.
          </p>

          <p>1. 파기 절차</p>

          <p>
            가) 이용자가 회원가입 등을 위해 입력한 정보는 목적이 달성된 후
            별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련
            법령에 의한 정보보호 사유에 따라 (보유 및 이용 기간 참조) 일정 기간
            저장된 후 파기됩니다.
          </p>

          <p>
            나) 개인정보는 법령에 의한 경우가 아니고서는 보유되는 이외의 다른
            목적으로 이용되지 않습니다.
          </p>

          <p>2. 파기 방법</p>

          <p>
            가) 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여
            파기합니다.
          </p>

          <p>
            나) 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는
            기술적 방법을 사용하여 삭제합니다.
          </p>

          <p>제6조 (이용자 및 법정대리인의 권리와 그 행사 방법)</p>

          <p>
            1. 이용자는 언제든지 자신의 개인정보를 조회하거나 수정할 수 있으며
            가입 해지를 요청할 수도 있습니다.
          </p>

          <p>
            2. 이용자가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을
            완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다.
          </p>

          <p>
            3. 또한, 잘못된 개인정보를 제삼자에게 이미 제공한 경우에는 정정
            처리결과를 제삼자에게 바로 통지하여 정정이 이루어지도록 하겠습니다.
          </p>

          <p>
            4. ‘프로젝트 팀&apos;은 이용자의 요청에 따라 해지 또는 삭제된
            개인정보는 프로젝트 팀이 수집하는 개인정보의 보유 및 이용 기간에
            명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록
            처리하고 있습니다.
          </p>

          <p>제7조 (개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항)</p>

          <p>
            ‘프로젝트 팀&apos;은 이용자의 서비스 편의를 제공하기 위해 이용정보를
            저장하고 수시로 불러오는 ‘쿠키(COOKIE)&apos;를 사용합니다. 쿠키는
            웹사이트가 고객의 컴퓨터 브라우저(인터넷 익스플로러 등)에 전송하는
            소량의 정보입니다.
          </p>

          <p>1. 쿠키의 사용 목적</p>

          <p>
            쿠키를 통해 이용자가 선호하는 설정 등을 저장하여 이용자에게 더욱
            빠른 웹 환경을 지원하며, 편리한 이용을 위해 서비스 개선에
            활용합니다. 이를 통해 이용자는 더욱 손쉽게 서비스를 이용할 수 있게
            됩니다.
          </p>

          <p>2. 쿠키 설치·운영 및 거부</p>

          <p>
            이용자는 쿠키 설치에 대한 선택권을 가지고 있으며, 언제든지 이러한
            쿠키의 저장을 거부하거나 삭제할 수 있습니다.
          </p>

          <p>3. 쿠키 설정 거부 방법</p>

          <p>
            - INTERNET EXPLORER: 도구 메뉴 선택 →인터넷 옵션 선택 → 개인정보 탭
            클릭 → 고급 개인정보 설정 → 쿠키 수준 설정
          </p>

          <p>
            - CHROME : 설정 메뉴 선택 → 고급 설정 표시 선택 → 개인정보 및 보안 →
            쿠키 및 기타 사이트 데이터 → 쿠키 수준 설정
          </p>

          <p>
            - SAFARI : 환경설정 메뉴 선택 → 개인정보 탭 선택 → 쿠키 및 웹사이트
            데이터 수준 설정 단, 쿠키 설치를 거부하였을 경우 로그인이 필요한
            일부 서비스 이용에 어려움이 있을 수 있습니다.
          </p>

          <p>제8조 (개인정보의 기술적·관리적 보호 대책)</p>

          <p>
            프로젝트 팀은 개인정보의 안전성 확보를 위해 다음과 같은 조치를
            취하고 있습니다.
          </p>

          <p>1. 관리적 조치: 내부 관리 계획 수립 시행, 정기적 팀원 교육 등</p>

          <p>
            2. 기술적 조치: 개인정보 처리 시스템 등의 접근 권한 관리,
            접근통제시스템 설치, 고유 식별 정보 등의 암호화, 보안 프로그램 설치
            등
          </p>

          <p>3. 물리적 조치: 전산실, 자료 보관실 등의 접근 통제</p>

          <p>제9조 (개인정보 보호 책임자 및 연락처)</p>

          <p>
            프로젝트 팀은 아래와 같이 개인정보 보호 책임자를 지정하고 있으며,
            개인정보 관련 문의 사항에 신속하고 성실하게 답변해 드리고 있습니다.
          </p>

          <p>[개인정보 보호 책임자]</p>

          <p>- 이름: 고요손(손준우)</p>

          <p>- 소속: Beyond the Birthplace</p>

          <p>- 메일: beyondthebirthplace.kr@gmail.com</p>

          <p>제10조 (권익침해 구제 방법)</p>

          <p>
            개인정보 침해에 대한 피해구제, 상담 등이 필요할 경우 다음 기관에
            문의하실 수 있습니다.
          </p>

          <p>
            - 개인정보침해신고센터(HTTP://PRIVACY.KISA.OR.KR / 국번 없이 118)
          </p>

          <p>
            - 개인정보분쟁조정위원회(HTTP://KOPICO.GO.KR / 국번 없이 1833-6972)
          </p>

          <p>
            - 대검찰청 사이버수사과(HTTP://CYBERCID.SPO.GO.KR / 국번 없이 1301)
          </p>

          <p>
            - 경찰청 사이버안전국(HTTP://CYBERBUREAU.POLICE.GO.KR / 국번 없이
            182).
          </p>

          <p>제11조 (링크 사이트에 대한 책임)</p>

          <p>
            프로젝트 팀은 이용자에게 다른 외부 사이트로 연결되는 링크를 제공할
            수 있습니다. 이 경우 프로젝트 팀은 외부 사이트에 대한 통제권이
            없으므로 이용자가 외부 사이트로부터 제공받은 서비스나 자료의 유용성,
            진실성, 적법성에 대해 책임 및 보증할 수 없으며, 링크된 외부 사이트의
            개인정보처리 방침은 프로젝트 팀과 무관하므로 해당 외부 사이트의
            정책을 확인하시기 바랍니다.
          </p>

          <p>제12조 (개인정보처리방침의 개정)</p>

          <p>
            본 개인정보처리 방침의 내용 추가, 삭제 및 수정이 있을 시에는 개정
            최소 7일 전부터 홈페이지를 통해 변경 및 내용 등을 공지하도록
            하겠습니다.
          </p>

          <p>- 공고 일자 : 2023년 7월 25일</p>

          <p>- 시행 일자 : 2023년 7월 25일</p>
        </>
      );
    }
  }
}
