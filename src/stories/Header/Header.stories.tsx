import type { Meta, StoryObj } from "@storybook/react";
import { Title, Description, Subtitle, Stories, Primary as PrimaryDocBlock, Controls} from "@storybook/blocks"
import Header from "./Header";
import Button from "../Button/Button";

const meta = {
  title: "Components/Header",
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
    componentSubtitle: "'Component Header",
    docs: {
      page: () => <>
        <Title />
        <Description />
        <Subtitle />

        <PrimaryDocBlock />
        <Controls />

        <Stories />
      </>,
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  args: {
    NavLogo: [
      <>
        <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" fill="transparant" />
          <rect x="56.5088" y="25.3428" width="44.0702" height="9.48573" transform="rotate(135 56.5088 25.3428)" fill="white" />
          <path d="M49.9478 56.6504L43.1147 49.8173L49.9478 49.8173L56.6552 49.943L49.9478 56.6504Z" fill="white" />
          <rect x="49.8008" y="80.999" width="44.0702" height="9.48573" transform="rotate(-135 49.8008 80.999)" fill="white" />
          <rect x="80.9834" y="49.8164" width="44.0702" height="9.48573" transform="rotate(135 80.9834 49.8164)" fill="white" />
        </svg>
        
        <div className="text-logo">CV ZAMAN NOW</div>
      </>
    ],
    menuItems: [
      <ul>
        <li className="active">Beranda</li>
        <li>Tentang Kami</li>
        <li>Buat CV</li>
        <li>Surat Lamaran</li>
      </ul>
    ],
    ProfileWrapper: [
      <>
        <Button 
          ButtonType="nolo"
          label="Daftar"
          style={{
            height: '48px',
            width: '118px'
          }}
        />
        <Button
          ButtonType="text" 
          label="Masuk"
          style={{
            marginLeft: '20px'
          }}
        />
      </>
    ],
  },
};

export const LoggedIn: Story = {
  args: {
    NavLogo: [
      <>
        <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" fill="transparant" />
          <rect x="56.5088" y="25.3428" width="44.0702" height="9.48573" transform="rotate(135 56.5088 25.3428)" fill="white" />
          <path d="M49.9478 56.6504L43.1147 49.8173L49.9478 49.8173L56.6552 49.943L49.9478 56.6504Z" fill="white" />
          <rect x="49.8008" y="80.999" width="44.0702" height="9.48573" transform="rotate(-135 49.8008 80.999)" fill="white" />
          <rect x="80.9834" y="49.8164" width="44.0702" height="9.48573" transform="rotate(135 80.9834 49.8164)" fill="white" />
        </svg>
        
        <div className="text-logo">CV ZAMAN NOW</div>
      </>
    ],
    menuItems: [
      <ul>
        <li>Beranda</li>
        <li>Tentang Kami</li>
        <li>Buat CV</li>
        <li>Surat Lamaran</li>
      </ul>
    ],
    ProfileWrapper: [
      <>
        <div style={{ marginLeft: "150px", justifyContent: "center", alignItems:"center" }}> 
          <div className="active" style={{ height: "90px", display: "flex",alignItems: "center" }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9796 20.4615C10.8228 20.4615 6.41895 21.2412 6.41895 24.3638C6.41895 27.4863 10.7948 28.2939 15.9796 28.2939C21.1364 28.2939 25.5389 27.513 25.5389 24.3917C25.5389 21.2704 21.1643 20.4615 15.9796 20.4615Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9799 16.0079C19.364 16.0079 22.1068 13.2637 22.1068 9.87961C22.1068 6.49548 19.364 3.75262 15.9799 3.75262C12.5957 3.75262 9.8516 6.49548 9.8516 9.87961C9.84017 13.2523 12.5652 15.9964 15.9367 16.0079H15.9799Z" stroke="white" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </>
    ],
  },
};