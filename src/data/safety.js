/* ------------------------------------------------------------------
   Safety & Trust page content

   IMPORTANT: Before publishing, check every `status` below against
   what the Humsafar – Daata app actually does today.
     'available' = members can use it right now
     'planned'   = on the roadmap, NOT live yet
   Only mark something 'available' once it is live in the app.
------------------------------------------------------------------- */

export const LAST_UPDATED = 'October 2026'

export const safetyTopics = [
  {
    id: 'verification',
    icon: 'BadgeCheck',
    title: 'Profile Verification',
    summary:
      'Verification helps make sure the people you meet are who they say they are.',
    items: [
      {
        title: 'Mobile number verification',
        description:
          'Every account confirms a working mobile number with a one-time password (OTP) at sign-up.',
        status: 'available',
      },
      {
        title: 'Email verification',
        description: 'Members confirm their email address before using their account.',
        status: 'available',
      },
      {
        title: 'Government ID verification',
        description:
          'Optional ID check, shown as a "Verified" badge on the profile. Your ID document will never be shown to other members.',
        status: 'planned',
      },
      {
        title: 'Selfie verification',
        description:
          'A live selfie compared with profile photos to confirm the photos belong to the member.',
        status: 'planned',
      },
    ],
  },
  {
    id: 'privacy',
    icon: 'LockKeyhole',
    title: 'Privacy Controls',
    summary: 'You decide what to share, with whom, and when.',
    items: [
      {
        title: 'Contact details stay private',
        description:
          'Your phone number and email are not shown on your profile. You choose when to share them.',
        status: 'available',
      },
      {
        title: 'Photo visibility settings',
        description:
          'Choose whether your photos are visible to all members or only to people you accept.',
        status: 'available',
      },
      {
        title: 'Hide or pause your profile',
        description:
          'Take a break at any time. A hidden profile does not appear in search results.',
        status: 'available',
      },
      {
        title: 'Delete your account',
        description:
          'Permanently delete your account and profile whenever you want to leave.',
        status: 'available',
      },
      {
        title: 'Field-by-field visibility',
        description:
          'Fine control over who can see details such as income, workplace or family information.',
        status: 'planned',
      },
    ],
  },
  {
    id: 'photos',
    icon: 'Image',
    title: 'Photo Moderation',
    summary: 'Photos are checked to keep the platform respectful and genuine.',
    items: [
      {
        title: 'Photo review before it goes live',
        description:
          'New profile photos are reviewed by our team. Photos that are inappropriate, misleading or not of the member are rejected.',
        status: 'available',
      },
      {
        title: 'Automatic image screening',
        description:
          'Automated checks to flag inappropriate, copied or stock images faster.',
        status: 'planned',
      },
      {
        title: 'Photo watermarking',
        description:
          'A watermark on profile photos to discourage copying and misuse.',
        status: 'planned',
      },
    ],
  },
  {
    id: 'reporting',
    icon: 'Flag',
    title: 'Reporting',
    summary: 'If something feels wrong, tell us. Every report is reviewed.',
    items: [
      {
        title: 'Report a profile',
        description:
          'Use the Report option on any profile and choose a reason, such as fake profile, harassment, asking for money or inappropriate content.',
        status: 'available',
      },
      {
        title: 'Report a conversation',
        description:
          'Report a message or chat directly from the conversation screen.',
        status: 'available',
      },
      {
        title: 'Report status updates',
        description:
          'An in-app notification telling you when your report has been reviewed.',
        status: 'planned',
      },
    ],
  },
  {
    id: 'blocking',
    icon: 'Ban',
    title: 'Blocking',
    summary: 'Stop unwanted contact instantly.',
    items: [
      {
        title: 'Block a member',
        description:
          'Once blocked, a member cannot view your profile, send you interests or message you.',
        status: 'available',
      },
      {
        title: 'Manage your blocked list',
        description: 'See everyone you have blocked and unblock them if you change your mind.',
        status: 'available',
      },
    ],
  },
]

export const scamRedFlags = [
  'Asks you for money, gift cards, crypto or bank transfers, for any reason.',
  'Has an urgent emergency, such as a medical bill, customs fee or visa cost, that only you can pay for.',
  'Says they live abroad or are posted far away, and keeps finding reasons not to video call or meet.',
  'Pushes you to move to WhatsApp or another app very quickly.',
  'Asks for your OTP, passwords, bank details, Aadhaar or PAN.',
  'Offers investment, trading or "guaranteed returns" opportunities.',
  'Profile looks too perfect, with model-like photos and very little real detail.',
  'Professes strong feelings very fast and pressures you to keep the relationship secret.',
]

export const safePractices = [
  'Never send money or share financial details with someone you have not met.',
  'Never share an OTP. Humsafar – Daata will never ask for your password or OTP.',
  'Video call before meeting in person, so you know the person matches their photos.',
  'Meet in a busy public place for the first few meetings, and tell family or a friend where you are going.',
  'Involve your family early. Verify details such as job and family independently.',
  'Keep conversations on the platform until you feel confident, so you can report misuse.',
  'Trust your instincts. If something feels off, stop, block and report.',
]

export const helpChannels = [
  {
    title: 'Email support',
    description:
      'Write to our team about safety concerns, account issues or a member you have reported.',
    status: 'available',
  },
  {
    title: 'In-app help centre',
    description: 'Safety guides and support requests directly inside the app.',
    status: 'planned',
  },
  {
    title: 'Priority safety helpline',
    description: 'A dedicated line for urgent safety concerns on the platform.',
    status: 'planned',
  },
]
