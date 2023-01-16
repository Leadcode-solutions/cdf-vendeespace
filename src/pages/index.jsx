import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import {ChatBubbleLeftEllipsisIcon, UserCircleIcon, TagIcon, SunIcon} from '@heroicons/react/24/solid'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/0a6a9387.jpg'
import image2 from '@/images/photos/IMG_0010.jpg'
import image3 from '@/images/photos/IMG_0148.jpg'
import image4 from '@/images/photos/IMG_0682.jpg'
import image5 from '@/images/photos/IMG_0758.jpg'

import fftaLogo from '@/images/logos/ffta.png'
import commiteLogo from '@/images/logos/commite.jpg'
import caLogo from '@/images/logos/ca.jpg'
import vendespaceLogo from '@/images/vendespace-logo.jpg'
import armurerieLogo from '@/images/logos/logo-armurerie-bocage.jpg'
import ibisLogo from '@/images/logos/RBI 30 oreillers.jpg'
import rocardLogo from '@/images/logos/Logo ROCARD TP V.jpg'
import jambonDeVendeeLogo from '@/images/logos/918611_PETITGAS_Affiche_4x3-HD.jpg'

import FacebookIcon from '@/images/icons/facebook-circular-logo.svg'

import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import { Fragment } from 'react'
import {MapPinIcon} from "@heroicons/react/20/solid";

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <Card.Cta>Lire l'article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Soyez à jour !</span>
      </h2>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-x-auto md:overflow-hidden py-4 sm:gap-8 snap-x snap-mandatory">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'snap-center relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function Maps () {
  return (
    <div className="overflow-hidden rounded-xl">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2735.7376392536175!2d-1.435563484400363!3d46.710910679135466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48042e39bb1521e7%3A0xfb6700b6f584998e!2sVENDESPACE!5e0!3m2!1sfr!2sfr!4v1668429167612!5m2!1sfr!2sfr"
        className="w-full h-[30rem]"
        allowFullScreen="" loading="lazy"
        referrerPolicy="no-referrer-when-downgrade" />
    </div>
  )
}

const activity = [
  {
    type: 'event',
    person: { name: 'Première journée', href: '#' },
    imageUrl: 'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    date: '24/02/23',
  },
  {
    type: 'detail',
    time: '10h30 - 13h00',
    value: 'Ouverture du greffe',
  },
  {
    type: 'detail',
    time: '10h30 - 13h00',
    value: 'Entrainement officiel',
  },
  {
    type: 'detail',
    time: '14h00 - 17h00',
    value: 'Ouverture du greffe Départ 2 & 3',
  },
  {
    type: 'detail',
    time: '14h00 - 17h25',
    value: 'Entraînement (3 volées) suivi des qualifications en rythme AB/CD',
  },
  {
    type: 'detail',
    time: '17h45 - 18h00',
    value: 'Entraînement (3 volées)',
  },
  {
    type: 'detail',
    time: '18h00 - 18h25',
    value: '1/16: U15FCL, U15HCL',
  },
  {
    type: 'detail',
    time: '18h30 - 18h55',
    value: '1/8: U15FCL, U15HCL',
  },
  {
    type: 'event',
    person: { name: 'Deuxième journée', href: '#' },
    imageUrl: 'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    date: '25/02/23',
  },
  {
    type: 'detail',
    time: '07h00 - 08h00',
    value: 'Ouverture du greffe',
  },
  {
    type: 'detail',
    time: '07h15 - 08h15',
    value: 'Echauffement salle Anexe Départ 2',
  },
  {
    type: 'detail',
    time: '08h30 - 11h55',
    value: 'Entraînement (3 volées) suivi des qualifications en rythme AB/CD',
  },
  {
    type: 'detail',
    time: '10h30 - 12h00',
    value: 'Ouverture de greffe Départ 3',
  },
  {
    type: 'detail',
    time: '12h15 - 12h30',
    value: 'Entraînement (3 volées)',
  },
  {
    type: 'detail',
    time: '12h30 - 12h55',
    value: '1/16: U13HCL, U21HCL',
  },
  {
    type: 'detail',
    time: '13h00 - 14h00',
    value: 'Echauffement Salle Annexe pour le départ 3',
  },
  {
    type: 'detail',
    time: '13h00 - 13h15',
    value: 'Entraînement (3 volées)',
  },
  {
    type: 'detail',
    time: '13h15 - 13h40',
    value: '1/8: U13FCL, U13HCL, U21FCL, U21HCL',
  },
  {
    type: 'detail',
    time: '14h15 - 17h40',
    value: 'Entraînement (3 volées) suivi des qualifications en rythme AB/CD',
  },
  {
    type: 'detail',
    time: '18h00 - 18h15',
    value: 'Entraînement (3 volées)',
  },
  {
    type: 'detail',
    time: '18h15 - 18h40',
    value: '1/16: U18FCL, U18HCL',
  },
  {
    type: 'detail',
    time: '18h45 - 16h10',
    value: '1/8: U18FCL, U18HCL',
  },
  {
    type: 'event',
    person: { name: 'Troisième journée', href: '#' },
    imageUrl: 'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    date: '26/02/23',
  },
  {
    type: 'detail',
    time: '07h30 - 08h15',
    value: 'Echauffement Salle Annexe U15CL, U18CL, U21CL & U21CO',
  },
  {
    type: 'detail',
    time: '08h30 - 08h45',
    value: 'Entraînement (3 volées)',
  },
  {
    type: 'detail',
    time: '08h45 - 09h10',
    value: '1/4: U15FCL, U15HCL, U18FCL, U18HCL, U21FCL, U21HCL, U21HCO',
  },
  {
    type: 'detail',
    time: '08h45 - 9h20',
    value: 'Entraînement (3 volées)',
  },
  {
    type: 'detail',
    time: '09h20 - 09h45',
    value: '1/2: U15FCL, U15HCL, U18FCL, U18HCL, U21FCL, U21HCL, U21FCO, U21HCO',
  },
  {
    type: 'detail',
    time: '09h30 - 10h15',
    value: 'Echauffement Salle Annexe U13CL, U18CO & U18BB',
  },
  {
    type: 'detail',
    time: '09h50 - 10h15',
    value: 'Bronze: U15FCL, U15HCL, U18FCL, U18HCL, U21FCL, U21HCL, U21FCO, U21HCO',
  },
  {
    type: 'detail',
    time: '10h25 - 10h40',
    value: 'Entraînement (3 volées)',
  },
  {
    type: 'detail',
    time: '10h40 - 11h05',
    value: '1/4: U13FCL, U13HCL, U18HCO, U18HBB',
  },
  {
    type: 'detail',
    time: '10h40 - 11h15',
    value: 'Entraînement (3 volées)',
  },
  {
    type: 'detail',
    time: '11h15 - 11h40',
    value: '1/2: U13FCL, U13HCL, U18FCO, U18HCO, U18FBB, U18HBB',
  },
  {
    type: 'detail',
    time: '11h45 - 12h10',
    value: 'Bronze: U13FCL, U13HCL, U18FCO, U18HCO, U18FBB, U18HBB',
  },
  {
    type: 'detail',
    time: '12h15 - 12h30',
    value: 'Entraînement (1 volée)',
  },
  {
    type: 'detail',
    time: '12h20 - 12h45',
    value: 'Finale Or: U13FCL, U13HCL, U18FCO, U18HCO, U18FBB, U18HBB',
  },
  {
    type: 'detail',
    time: '12h30 - 15h25',
    value: 'Echauffement Salle Annexe Finalistes OR',
  },
  {
    type: 'detail',
    time: '13h45 - 14h00',
    value: 'Finale Or: U15 Femme Arc Classique',
  },
  {
    type: 'detail',
    time: '14h02 - 14h17',
    value: 'Finale Or: U15 Homme Arc Classique',
  },
  {
    type: 'detail',
    time: '14h19 - 14h34',
    value: 'Finale Or: U18 Femme Arc Classique',
  },
  {
    type: 'detail',
    time: '14h36 - 14h51',
    value: 'Finale Or: U18 Arc Homme Classique',
  },
  {
    type: 'detail',
    time: '14h53 - 15h08',
    value: 'Finale Or: U21 Femme Arc à Poulies',
  },
  {
    type: 'detail',
    time: '15h10 - 15h25',
    value: 'Finale Or: U21 Homme Arc à Poulies',
  },
  {
    type: 'detail',
    time: '15h27 - 15h42',
    value: 'Finale Or: U21 Arc Femme Classique',
  },
  {
    type: 'detail',
    time: '15h44 - 15h59',
    value: 'Finale Or: U21 Homme Arc Classique',
  },
  {
    type: 'detail',
    time: '16h15 - 16h45',
    value: 'Podiums Toutes catégories',
  },
]

function Timeline() {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {activity.map((activityItem, activityItemIdx) => (
          <li key={activityItem.id}>
            <div className="relative pb-5">
              {activityItemIdx !== activity.length - 1 ? (
                <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              ) : null}
              <div className="relative flex items-start space-x-3">
                {activityItem.type === 'event' ? (
                  <>
                    <div className="relative">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 ring-8 ring-white"></div>

                      <span className="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
                        <SunIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm">
                          <a href={activityItem.person.href} className="font-medium text-gray-900">
                            {activityItem.person.name}
                          </a>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Le {activityItem.date}</p>
                      </div>
                    </div>
                  </>
                ) : activityItem.type === 'detail' ? (
                  <>
                    <div>
                      <div className="relative px-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 ring-8 ring-white">
                          <MapPinIcon className="h-4 w-4 text-red-500" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 py-1.5">
                      <div className="text-sm text-gray-500">
                        <div className="">
                          <p>{activityItem.time} : {activityItem.value}</p>
                        </div>
                        <span className="whitespace-nowrap">{activityItem.date}</span>
                      </div>
                    </div>
                  </>
                ): null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Partners () {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-4">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div>
              <Image src={fftaLogo} className="w-full h-16" />
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div>
              <Image src={commiteLogo} className="h-32 w-32" />
            </div>
          </div>
          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
            <Image src={vendespaceLogo} className="h-32 w-32" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
            <div>
              <Image src={caLogo} className="w-full" />
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
            <div>
              <Image src={armurerieLogo} className="w-full" />
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <Image src={ibisLogo} className="w-full" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div>
              <Image src={rocardLogo} className="w-full" />
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <Image src={jambonDeVendeeLogo} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Championnat de France - VendéeSpace
        </title>
        <meta
          name="description"
          content="I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Championnat de France 2023<br />en salle 18m.
          </h1>
          <p className="font-bold opacity-50 text-2xl text-zink-400 dark:text-white">Vendespace - Vendée</p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            La Fédération Française de Tir à l’Arc (<a href="https://www.ffta.fr" target="_blank">FFTA</a>) délègue au comité départemental de Vendée de tir à l'arc de l'organisation du "Championat de France jeune de tir à 18m" qui aura lieu du 24 au 26 février 2023 à Mouilleron-Le-Captif au Vendespace.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <Link className="group -m-1 p-1" href="https://m.facebook.com/profile.php?id=100029087427139" target="_blank">
              <Image src={FacebookIcon} className="h-5 w-5 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
            </Link>
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </Container>
      <Container className="mt-9 py-10">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 mb-5">Nos partenaires</h2>
        <Partners />
      </Container>
      <Container className="mt-9 py-10">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 mb-5">Localisation</h2>
        <Maps />
      </Container>
      <Container className="mt-9 py-10">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 mb-5">Déroulement</h2>
        <Timeline />
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
