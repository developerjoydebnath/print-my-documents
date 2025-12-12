export class HomeContent {
  private id: number;
  private type: string;
  private slug: string;
  private title: string;

  // hero section
  private heroTitle1: string;
  private heroTitle2: string;
  private heroBtn1Title: string;
  private heroBtn2Title: string;
  private heroBtn1Link: string;
  private heroBtn2Link: string;
  private heroImage: string | undefined;

  // who we are section
  private whoWeAreSubTitle: string;
  private whoWeAreTitle1: string;
  private whoWeAreTitle2: string;
  private whoWeAreDescription: string;
  private whoWeAreCard1SubTitle: string;
  private whoWeAreCard1Title1: string;
  private whoWeAreCard1Title2: string;
  private whoWeAreCard1Description: string;
  private whoWeAreCard1BtnText: string;
  private whoWeAreCard1BtnUrl: string;
  private whoWeAreCard2Title1: string;
  private whoWeAreCard2Title2: string;
  private whoWeAreCard2Description: string;
  private whoWeAreCard3Stat1Title: string;
  private whoWeAreCard3Stat1Description: string;
  private whoWeAreCard3Stat2Title: string;
  private whoWeAreCard3Stat2Description: string;
  private whoWeAreCard3Stat3Title: string;
  private whoWeAreCard3Stat3Description: string;
  private whoWeAreCard3Stat4Title: string;
  private whoWeAreCard3Stat4Description: string;
  private whoWeAreImage: string | undefined;

  // testimonials
  private testimonialTitle1: string;
  private testimonialTitle2: string;
  private testimonialDescription: string;

  // our commitment
  private ourCommitmentSubTitle: string;
  private ourCommitmentTitle1: string;
  private ourCommitmentTitle2: string;
  private ourCommitmentDescription1: string;
  private ourCommitmentDescription2: string;
  private ourCommitmentBtnText: string;
  private ourCommitmentBtnUrl: string;
  private ourCommitmentImage: string | undefined;

  // our commitment group images
  private ourCommitmentGroupImage1: string | undefined;
  private ourCommitmentGroupImage2: string | undefined;
  private ourCommitmentGroupImage3: string | undefined;
  private ourCommitmentGroupImage4: string | undefined;
  private ourCommitmentGroupImage5: string | undefined;
  private ourCommitmentGroupImage6: string | undefined;

  // why choose us
  private whyChooseUsTitle1: string;
  private whyChooseUsTitle2: string;
  private whyChooseUsDescription: string;
  private whyChooseUsCard1Title: string;
  private whyChooseUsCard1Description: string;
  private whyChooseUsCard1BtnText: string;
  private whyChooseUsCard1BtnUrl: string;
  private whyChooseUsCard2Title: string;
  private whyChooseUsCard2Description: string;
  private whyChooseUsCard2BtnText: string;
  private whyChooseUsCard2BtnUrl: string;
  private whyChooseUsCard3Title: string;
  private whyChooseUsCard3Description: string;
  private whyChooseUsCard3BtnText: string;
  private whyChooseUsCard3BtnUrl: string;
  private whyChooseUsCard4Title: string;
  private whyChooseUsCard4Description: string;
  private whyChooseUsCard4BtnText: string;
  private whyChooseUsCard4BtnUrl: string;

  // blog section
  private blogSectionSubTitle: string;
  private blogSectionTitle1: string;
  private blogSectionTitle2: string;
  private blogSectionDescription: string;

  // meta information
  private metaTitle: string;
  private metaDescription: string;
  private metaKeywords: string;

  private original: Record<string, any>;

  constructor(data: Record<string, any>) {
    this.id = data?.id || null;
    this.type = data?.type || "";
    this.slug = data?.slug || "";
    this.title = data?.title || "";

    // hero section
    this.heroTitle1 = data?.data?.hero?.heroTitle1 || "";
    this.heroTitle2 = data?.data?.hero?.heroTitle2 || "";
    this.heroBtn1Title = data?.data?.hero?.heroBtn1Title || "";
    this.heroBtn2Title = data?.data?.hero?.heroBtn2Title || "";
    this.heroBtn1Link = data?.data?.hero?.heroBtn1Link || "";
    this.heroBtn2Link = data?.data?.hero?.heroBtn2Link || "";
    this.heroImage = data?.data?.hero?.heroImage || undefined;

    // who we are section
    this.whoWeAreSubTitle = data?.data?.whoWeAre?.whoWeAreSubTitle || "";
    this.whoWeAreTitle1 = data?.data?.whoWeAre?.whoWeAreTitle1 || "";
    this.whoWeAreTitle2 = data?.data?.whoWeAre?.whoWeAreTitle2 || "";
    this.whoWeAreDescription = data?.data?.whoWeAre?.whoWeAreDescription || "";
    this.whoWeAreCard1SubTitle =
      data?.data?.whoWeAre?.whoWeAreCard1SubTitle || "";
    this.whoWeAreCard1Title1 = data?.data?.whoWeAre?.whoWeAreCard1Title1 || "";
    this.whoWeAreCard1Title2 = data?.data?.whoWeAre?.whoWeAreCard1Title2 || "";
    this.whoWeAreCard1Description =
      data?.data?.whoWeAre?.whoWeAreCard1Description || "";
    this.whoWeAreCard1BtnText =
      data?.data?.whoWeAre?.whoWeAreCard1BtnText || "";
    this.whoWeAreCard1BtnUrl = data?.data?.whoWeAre?.whoWeAreCard1BtnUrl || "";
    this.whoWeAreCard2Title1 = data?.data?.whoWeAre?.whoWeAreCard2Title1 || "";
    this.whoWeAreCard2Title2 = data?.data?.whoWeAre?.whoWeAreCard2Title2 || "";
    this.whoWeAreCard2Description =
      data?.data?.whoWeAre?.whoWeAreCard2Description || "";
    this.whoWeAreCard3Stat1Title =
      data?.data?.whoWeAre?.whoWeAreCard3Stat1Title || "";
    this.whoWeAreCard3Stat1Description =
      data?.data?.whoWeAre?.whoWeAreCard3Stat1Description || "";
    this.whoWeAreCard3Stat2Title =
      data?.data?.whoWeAre?.whoWeAreCard3Stat2Title || "";
    this.whoWeAreCard3Stat2Description =
      data?.data?.whoWeAre?.whoWeAreCard3Stat2Description || "";
    this.whoWeAreCard3Stat3Title =
      data?.data?.whoWeAre?.whoWeAreCard3Stat3Title || "";
    this.whoWeAreCard3Stat3Description =
      data?.data?.whoWeAre?.whoWeAreCard3Stat3Description || "";
    this.whoWeAreCard3Stat4Title =
      data?.data?.whoWeAre?.whoWeAreCard3Stat4Title || "";
    this.whoWeAreCard3Stat4Description =
      data?.data?.whoWeAre?.whoWeAreCard3Stat4Description || "";
    this.whoWeAreImage = data?.data?.whoWeAre?.whoWeAreImage || undefined;

    // testimonials
    this.testimonialTitle1 = data?.data?.testimonials?.testimonialTitle1 || "";
    this.testimonialTitle2 = data?.data?.testimonials?.testimonialTitle2 || "";
    this.testimonialDescription =
      data?.data?.testimonials?.testimonialDescription || "";

    // our commitment
    this.ourCommitmentSubTitle =
      data?.data?.ourCommitment?.ourCommitmentSubTitle || "";
    this.ourCommitmentTitle1 =
      data?.data?.ourCommitment?.ourCommitmentTitle1 || "";
    this.ourCommitmentTitle2 =
      data?.data?.ourCommitment?.ourCommitmentTitle2 || "";
    this.ourCommitmentDescription1 =
      data?.data?.ourCommitment?.ourCommitmentDescription1 || "";
    this.ourCommitmentDescription2 =
      data?.data?.ourCommitment?.ourCommitmentDescription2 || "";
    this.ourCommitmentBtnText =
      data?.data?.ourCommitment?.ourCommitmentBtnText || "";
    this.ourCommitmentBtnUrl =
      data?.data?.ourCommitment?.ourCommitmentBtnUrl || "";
    this.ourCommitmentImage =
      data?.data?.ourCommitment?.ourCommitmentImage || undefined;

    // our commitment group images
    this.ourCommitmentGroupImage1 =
      data?.data?.ourCommitment?.ourCommitmentGroupImage1 || undefined;
    this.ourCommitmentGroupImage2 =
      data?.data?.ourCommitment?.ourCommitmentGroupImage2 || undefined;
    this.ourCommitmentGroupImage3 =
      data?.data?.ourCommitment?.ourCommitmentGroupImage3 || undefined;
    this.ourCommitmentGroupImage4 =
      data?.data?.ourCommitment?.ourCommitmentGroupImage4 || undefined;
    this.ourCommitmentGroupImage5 =
      data?.data?.ourCommitment?.ourCommitmentGroupImage5 || undefined;
    this.ourCommitmentGroupImage6 =
      data?.data?.ourCommitment?.ourCommitmentGroupImage6 || undefined;

    // why choose us
    this.whyChooseUsTitle1 = data?.data?.whyChooseUs?.whyChooseUsTitle1 || "";
    this.whyChooseUsTitle2 = data?.data?.whyChooseUs?.whyChooseUsTitle2 || "";
    this.whyChooseUsDescription =
      data?.data?.whyChooseUs?.whyChooseUsDescription || "";
    this.whyChooseUsCard1Title =
      data?.data?.whyChooseUs?.whyChooseUsCard1Title || "";
    this.whyChooseUsCard1Description =
      data?.data?.whyChooseUs?.whyChooseUsCard1Description || "";
    this.whyChooseUsCard1BtnText =
      data?.data?.whyChooseUs?.whyChooseUsCard1BtnText || "";
    this.whyChooseUsCard1BtnUrl =
      data?.data?.whyChooseUs?.whyChooseUsCard1BtnUrl || "";
    this.whyChooseUsCard2Title =
      data?.data?.whyChooseUs?.whyChooseUsCard2Title || "";
    this.whyChooseUsCard2Description =
      data?.data?.whyChooseUs?.whyChooseUsCard2Description || "";
    this.whyChooseUsCard2BtnText =
      data?.data?.whyChooseUs?.whyChooseUsCard2BtnText || "";
    this.whyChooseUsCard2BtnUrl =
      data?.data?.whyChooseUs?.whyChooseUsCard2BtnUrl || "";
    this.whyChooseUsCard3Title =
      data?.data?.whyChooseUs?.whyChooseUsCard3Title || "";
    this.whyChooseUsCard3Description =
      data?.data?.whyChooseUs?.whyChooseUsCard3Description || "";
    this.whyChooseUsCard3BtnText =
      data?.data?.whyChooseUs?.whyChooseUsCard3BtnText || "";
    this.whyChooseUsCard3BtnUrl =
      data?.data?.whyChooseUs?.whyChooseUsCard3BtnUrl || "";
    this.whyChooseUsCard4Title =
      data?.data?.whyChooseUs?.whyChooseUsCard4Title || "";
    this.whyChooseUsCard4Description =
      data?.data?.whyChooseUs?.whyChooseUsCard4Description || "";
    this.whyChooseUsCard4BtnText =
      data?.data?.whyChooseUs?.whyChooseUsCard4BtnText || "";
    this.whyChooseUsCard4BtnUrl =
      data?.data?.whyChooseUs?.whyChooseUsCard4BtnUrl || "";

    // blog section
    this.blogSectionSubTitle =
      data?.data?.blogSection?.blogSectionSubTitle || "";
    this.blogSectionTitle1 = data?.data?.blogSection?.blogSectionTitle1 || "";
    this.blogSectionTitle2 = data?.data?.blogSection?.blogSectionTitle2 || "";
    this.blogSectionDescription =
      data?.data?.blogSection?.blogSectionDescription || "";

    // meta information
    this.metaTitle = data?.data?.metaInformation?.metaTitle || "";
    this.metaDescription = data?.data?.metaInformation?.metaDescription || "";
    this.metaKeywords = data?.data?.metaInformation?.metaKeywords || "";

    this.original = data;
  }

  // getter functions
  getId() {
    return this.id;
  }
  getType() {
    return this.type;
  }
  getSlug() {
    return this.slug;
  }
  getTitle() {
    return this.title;
  }

  // hero section
  getHeroTitle1() {
    return this.heroTitle1;
  }
  getHeroTitle2() {
    return this.heroTitle2;
  }
  getHeroBtn1Title() {
    return this.heroBtn1Title;
  }
  getHeroBtn2Title() {
    return this.heroBtn2Title;
  }
  getHeroBtn1Link() {
    return this.heroBtn1Link;
  }
  getHeroBtn2Link() {
    return this.heroBtn2Link;
  }
  getHeroImage() {
    return this.heroImage;
  }

  // who we are section
  getWhoWeAreSubTitle() {
    return this.whoWeAreSubTitle;
  }
  getWhoWeAreTitle1() {
    return this.whoWeAreTitle1;
  }
  getWhoWeAreTitle2() {
    return this.whoWeAreTitle2;
  }
  getWhoWeAreDescription() {
    return this.whoWeAreDescription;
  }
  getWhoWeAreCard1SubTitle() {
    return this.whoWeAreCard1SubTitle;
  }
  getWhoWeAreCard1Title1() {
    return this.whoWeAreCard1Title1;
  }
  getWhoWeAreCard1Title2() {
    return this.whoWeAreCard1Title2;
  }
  getWhoWeAreCard1Description() {
    return this.whoWeAreCard1Description;
  }
  getWhoWeAreCard1BtnText() {
    return this.whoWeAreCard1BtnText;
  }
  getWhoWeAreCard1BtnUrl() {
    return this.whoWeAreCard1BtnUrl;
  }
  getWhoWeAreCard2Title1() {
    return this.whoWeAreCard2Title1;
  }
  getWhoWeAreCard2Title2() {
    return this.whoWeAreCard2Title2;
  }
  getWhoWeAreCard2Description() {
    return this.whoWeAreCard2Description;
  }
  getWhoWeAreCard3Stat1Title() {
    return this.whoWeAreCard3Stat1Title;
  }
  getWhoWeAreCard3Stat1Description() {
    return this.whoWeAreCard3Stat1Description;
  }
  getWhoWeAreCard3Stat2Title() {
    return this.whoWeAreCard3Stat2Title;
  }
  getWhoWeAreCard3Stat2Description() {
    return this.whoWeAreCard3Stat2Description;
  }
  getWhoWeAreCard3Stat3Title() {
    return this.whoWeAreCard3Stat3Title;
  }
  getWhoWeAreCard3Stat3Description() {
    return this.whoWeAreCard3Stat3Description;
  }
  getWhoWeAreCard3Stat4Title() {
    return this.whoWeAreCard3Stat4Title;
  }
  getWhoWeAreCard3Stat4Description() {
    return this.whoWeAreCard3Stat4Description;
  }
  getWhoWeAreImage() {
    return this.whoWeAreImage;
  }

  // testimonials
  getTestimonialTitle1() {
    return this.testimonialTitle1;
  }
  getTestimonialTitle2() {
    return this.testimonialTitle2;
  }
  getTestimonialDescription() {
    return this.testimonialDescription;
  }

  // our commitment
  getOurCommitmentSubTitle() {
    return this.ourCommitmentSubTitle;
  }
  getOurCommitmentTitle1() {
    return this.ourCommitmentTitle1;
  }
  getOurCommitmentTitle2() {
    return this.ourCommitmentTitle2;
  }
  getOurCommitmentDescription1() {
    return this.ourCommitmentDescription1;
  }
  getOurCommitmentDescription2() {
    return this.ourCommitmentDescription2;
  }
  getOurCommitmentBtnText() {
    return this.ourCommitmentBtnText;
  }
  getOurCommitmentBtnUrl() {
    return this.ourCommitmentBtnUrl;
  }
  getOurCommitmentImage() {
    return this.ourCommitmentImage;
  }

  // our commitment group images
  getOurCommitmentGroupImage1() {
    return this.ourCommitmentGroupImage1;
  }
  getOurCommitmentGroupImage2() {
    return this.ourCommitmentGroupImage2;
  }
  getOurCommitmentGroupImage3() {
    return this.ourCommitmentGroupImage3;
  }
  getOurCommitmentGroupImage4() {
    return this.ourCommitmentGroupImage4;
  }
  getOurCommitmentGroupImage5() {
    return this.ourCommitmentGroupImage5;
  }
  getOurCommitmentGroupImage6() {
    return this.ourCommitmentGroupImage6;
  }

  // why choose us
  getWhyChooseUsTitle1() {
    return this.whyChooseUsTitle1;
  }
  getWhyChooseUsTitle2() {
    return this.whyChooseUsTitle2;
  }
  getWhyChooseUsDescription() {
    return this.whyChooseUsDescription;
  }
  getWhyChooseUsCard1Title() {
    return this.whyChooseUsCard1Title;
  }
  getWhyChooseUsCard1Description() {
    return this.whyChooseUsCard1Description;
  }
  getWhyChooseUsCard1BtnText() {
    return this.whyChooseUsCard1BtnText;
  }
  getWhyChooseUsCard1BtnUrl() {
    return this.whyChooseUsCard1BtnUrl;
  }
  getWhyChooseUsCard2Title() {
    return this.whyChooseUsCard2Title;
  }
  getWhyChooseUsCard2Description() {
    return this.whyChooseUsCard2Description;
  }
  getWhyChooseUsCard2BtnText() {
    return this.whyChooseUsCard2BtnText;
  }
  getWhyChooseUsCard2BtnUrl() {
    return this.whyChooseUsCard2BtnUrl;
  }
  getWhyChooseUsCard3Title() {
    return this.whyChooseUsCard3Title;
  }
  getWhyChooseUsCard3Description() {
    return this.whyChooseUsCard3Description;
  }
  getWhyChooseUsCard3BtnText() {
    return this.whyChooseUsCard3BtnText;
  }
  getWhyChooseUsCard3BtnUrl() {
    return this.whyChooseUsCard3BtnUrl;
  }
  getWhyChooseUsCard4Title() {
    return this.whyChooseUsCard4Title;
  }
  getWhyChooseUsCard4Description() {
    return this.whyChooseUsCard4Description;
  }
  getWhyChooseUsCard4BtnText() {
    return this.whyChooseUsCard4BtnText;
  }
  getWhyChooseUsCard4BtnUrl() {
    return this.whyChooseUsCard4BtnUrl;
  }

  // blog section
  getBlogSectionSubTitle() {
    return this.blogSectionSubTitle;
  }
  getBlogSectionTitle1() {
    return this.blogSectionTitle1;
  }
  getBlogSectionTitle2() {
    return this.blogSectionTitle2;
  }
  getBlogSectionDescription() {
    return this.blogSectionDescription;
  }

  // meta information
  getMetaTitle() {
    return this.metaTitle;
  }
  getMetaDescription() {
    return this.metaDescription;
  }
  getMetaKeywords() {
    return this.metaKeywords;
  }

  getOriginal() {
    return this.original;
  }
}
