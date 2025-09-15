import type { Meta, StoryObj } from "@storybook/react";

const Introduction = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', fontFamily: 'system-ui' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>
        Welcome to Your Component Library
      </h1>

      <p style={{ fontSize: '1.125rem', color: '#4b5563', marginBottom: '2rem' }}>
        This is a comprehensive collection of reusable React components built with{" "}
        <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, and{" "}
        <strong>Class Variance Authority (CVA)</strong> for consistent styling and variants.
      </p>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
          🚀 Getting Started
        </h2>
        <p style={{ color: '#4b5563', marginBottom: '1rem' }}>
          Explore the components in the sidebar to see all available variants, sizes, and configurations. Each component comes with:
        </p>
        <ul style={{ color: '#4b5563', paddingLeft: '1.5rem' }}>
          <li><strong>Multiple variants</strong> for different visual styles</li>
          <li><strong>Size options</strong> from small to extra large</li>
          <li><strong>Interactive controls</strong> to test different props</li>
          <li><strong>Accessibility features</strong> built-in</li>
          <li><strong>TypeScript support</strong> for type safety</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
          📚 Available Components
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
              🔘 Button
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>
              A versatile button component with multiple variants and color schemes.
            </p>
            <ul style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
              <li><strong>Variants:</strong> Solid, Outline, Ghost, Realistic</li>
              <li><strong>Sizes:</strong> Small, Medium, Large, Extra Large</li>
              <li><strong>Colors:</strong> Primary, Secondary, Danger, Success, Warning, Info, Light, Dark</li>
            </ul>
          </div>

          <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
              📝 Input
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>
              A flexible input component for forms and user input.
            </p>
            <ul style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
              <li><strong>Variants:</strong> Default, Filled, Ghost, Error, Success</li>
              <li><strong>Sizes:</strong> Small, Medium, Large, Extra Large</li>
              <li><strong>Types:</strong> Text, Password, Email, Number, Date, URL, Tel, Search</li>
            </ul>
          </div>

          <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
              📄 TextField
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>
              A multiline textarea component for longer text input.
            </p>
            <ul style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
              <li><strong>Variants:</strong> Default, Filled, Ghost, Error, Success</li>
              <li><strong>Resize:</strong> None, Vertical, Horizontal, Both</li>
              <li><strong>Features:</strong> Customizable min-height, full width control</li>
            </ul>
          </div>

          <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
              📖 Text
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>
              A polymorphic text component for typography.
            </p>
            <ul style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
              <li><strong>Elements:</strong> Span, Paragraph, Headings (H1-H6), Div, Label</li>
              <li><strong>Emphasis:</strong> Low, Medium, High</li>
              <li><strong>Styling:</strong> Italic, Underline options</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
          🛠️ Technology Stack
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div><span>⚛️</span> <strong>React 18</strong> - Modern React with hooks</div>
          <div><span>📘</span> <strong>TypeScript</strong> - Type safety and better DX</div>
          <div><span>🎨</span> <strong>Tailwind CSS</strong> - Utility-first CSS framework</div>
          <div><span>🔧</span> <strong>CVA</strong> - Type-safe component variants</div>
          <div><span>📚</span> <strong>Storybook</strong> - Component development</div>
          <div><span>⚡</span> <strong>Vite</strong> - Fast build tool and dev server</div>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
          📖 Usage Examples
        </h2>

        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Basic Button</h4>
          <pre style={{
            fontSize: '0.875rem',
            backgroundColor: '#1f2937',
            color: '#10b981',
            padding: '0.75rem',
            borderRadius: '0.375rem',
            overflow: 'auto'
          }}>
            {`import { Button } from './components';

<Button variant="solid" colorscheme="primary">
  Click me
</Button>`}
          </pre>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Form Input</h4>
          <pre style={{
            fontSize: '0.875rem',
            backgroundColor: '#1f2937',
            color: '#10b981',
            padding: '0.75rem',
            borderRadius: '0.375rem',
            overflow: 'auto'
          }}>
            {`import { Input } from './components';

<Input 
  variant="filled" 
  size="lg" 
  placeholder="Enter your email" 
  type="email" 
/>`}
          </pre>
        </div>
      </section>

      <div style={{
        marginTop: '3rem',
        padding: '1.5rem',
        backgroundColor: '#dbeafe',
        borderRadius: '0.5rem',
        border: '1px solid #93c5fd'
      }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1e40af', marginBottom: '0.5rem' }}>
          🎉 Happy Coding!
        </h3>
        <p style={{ color: '#1e40af' }}>
          Start exploring the components in the sidebar to see all the variants and features available.
          Each component has interactive controls so you can test different configurations in real-time.
        </p>
      </div>
    </div>
  );
};

const meta: Meta<typeof Introduction> = {
  title: "Introduction",
  component: Introduction,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Welcome to your component library! This page provides an overview of all available components and their features.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Welcome: Story = {};