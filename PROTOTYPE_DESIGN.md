# 🎨 Prototype Design Guide - PortfolioHub

## Overview
This document outlines the design specifications and prototype requirements for the Student Portfolio Platform.

---

## 🎯 Design Principles

1. **Simplicity**: Clean, intuitive interface
2. **Consistency**: Uniform design patterns throughout
3. **Accessibility**: WCAG 2.1 compliant
4. **Responsiveness**: Mobile-first approach
5. **Visual Hierarchy**: Clear information architecture

---

## 🎨 Color Palette

### Primary Colors
- **Primary Gradient**: `#667eea` → `#764ba2`
- **Primary Dark**: `#5568d3`
- **Primary Light**: `#8b9ef7`

### Secondary Colors
- **Success**: `#56ab2f` → `#a8e063`
- **Warning**: `#ffa502`
- **Danger**: `#ff4757`
- **Info**: `#48dbfb`

### Neutral Colors
- **Background**: `#f5f7fa`
- **White**: `#ffffff`
- **Text Dark**: `#333333`
- **Text Medium**: `#666666`
- **Text Light**: `#999999`
- **Border**: `#e0e0e0`

---

## 📝 Typography

### Font Family
- **Primary**: Inter (Google Fonts)
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'

### Font Sizes
- **H1**: 3.5rem (56px) - Hero titles
- **H2**: 2.2rem (35px) - Page titles
- **H3**: 1.5rem (24px) - Section headers
- **Body**: 1rem (16px) - Regular text
- **Small**: 0.85rem (14px) - Meta information

### Font Weights
- **Light**: 300
- **Regular**: 400
- **Semibold**: 600
- **Bold**: 700
- **Extra Bold**: 800

---

## 📐 Spacing System

Based on 8px grid:
- **xs**: 0.5rem (8px)
- **sm**: 1rem (16px)
- **md**: 1.5rem (24px)
- **lg**: 2rem (32px)
- **xl**: 3rem (48px)
- **2xl**: 5rem (80px)

---

## 🖼️ UI Components Specifications

### Buttons

#### Primary Button
- Background: Linear gradient `#667eea` → `#764ba2`
- Color: White
- Padding: 1rem 2.5rem
- Border Radius: 10px
- Font Weight: 700
- Hover: Transform translateY(-3px) + shadow

#### Secondary Button
- Background: Transparent
- Border: 2px solid white
- Color: White
- Padding: 0.6rem 1.5rem
- Border Radius: 8px
- Hover: Background white, color primary

#### Small Button
- Padding: 0.6rem 1rem
- Border Radius: 8px
- Font Weight: 600

### Cards

#### Project Card
- Background: White
- Border Radius: 15px
- Box Shadow: 0 2px 10px rgba(0,0,0,0.08)
- Hover: Transform translateY(-5px) + enhanced shadow
- Image Height: 200px
- Content Padding: 1.5rem

#### Stat Card
- Background: White
- Border Radius: 15px
- Padding: 1.8rem
- Display: Flex with icon and info
- Icon Size: 60px with gradient background

### Forms

#### Input Fields
- Padding: 0.9rem
- Border: 2px solid `#e0e0e0`
- Border Radius: 10px
- Focus: Border color `#667eea`

#### Textarea
- Min Height: 100px
- Resize: Vertical
- Same styling as input fields

#### Select Dropdown
- Same styling as input fields
- Custom arrow icon

### Modals

- Background: White
- Border Radius: 20px
- Max Width: 600px
- Box Shadow: 0 20px 60px rgba(0,0,0,0.3)
- Overlay: rgba(0,0,0,0.7)
- Header: 1.5rem padding, border bottom
- Body: 2rem padding

### Progress Bar
- Height: 8px
- Background: `#e0e0e0`
- Fill: Linear gradient `#667eea` → `#764ba2`
- Border Radius: 10px

### Status Badges
- Padding: 0.3rem 0.8rem
- Border Radius: 20px
- Font Size: 0.8rem
- Font Weight: 600

**Colors:**
- In Progress: `#fff3cd` / `#856404`
- Completed: `#d4edda` / `#155724`
- Pending: `#f8d7da` / `#721c24`

---

## 📱 Screen Specifications

### 1. Landing Page

**Layout:**
```
┌─────────────────────────────────────┐
│  Logo              [Login] [Register]│
├─────────────────────────────────────┤
│                                     │
│     Showcase Your Academic Journey  │
│     [Large Hero Text]               │
│     [Subtitle]                      │
│     [Get Started Button]            │
│                                     │
├─────────────────────────────────────┤
│  [Feature 1] [Feature 2] [Feature 3]│
│  [Feature 4] [Feature 5] [Feature 6]│
└─────────────────────────────────────┘
```

**Elements:**
- Navigation bar with logo and auth buttons
- Hero section with gradient background
- Feature grid (2x3 on desktop, 1 column on mobile)
- Icons from Lucide React
- Call-to-action button

---

### 2. Login/Register Pages

**Layout:**
```
┌─────────────────────────────────────┐
│                                     │
│         ┌─────────────────┐         │
│         │   [Icon]        │         │
│         │   Welcome Back  │         │
│         │                 │         │
│         │   [Email]       │         │
│         │   [Password]    │         │
│         │   [Role]        │         │
│         │   [Login Button]│         │
│         │                 │         │
│         │   [Link]        │         │
│         └─────────────────┘         │
│                                     │
└─────────────────────────────────────┘
```

**Elements:**
- Centered card on gradient background
- Icon at top
- Form fields with labels
- Submit button
- Footer link to alternate page

---

### 3. Student Dashboard

**Layout:**
```
┌─────────────────────────────────────┐
│ Logo    User Info    [Logout]       │
├─────────────────────────────────────┤
│ My Portfolio                        │
│ Manage your projects                │
├─────────────────────────────────────┤
│ [Stat 1] [Stat 2] [Stat 3] [Stat 4] │
├─────────────────────────────────────┤
│ [+ Add New Project]                 │
├─────────────────────────────────────┤
│ ┌──────┐ ┌──────┐ ┌──────┐         │
│ │Proj 1│ │Proj 2│ │Proj 3│         │
│ └──────┘ └──────┘ └──────┘         │
└─────────────────────────────────────┘
```

**Elements:**
- Top navigation with user info
- Page header with title and description
- 4 statistics cards in grid
- Action button
- Project cards grid (responsive)

---

### 4. Admin Dashboard

**Layout:**
```
┌─────────────────────────────────────┐
│ Logo Admin  User Info    [Logout]   │
├─────────────────────────────────────┤
│ Admin Dashboard                     │
│ Review student projects             │
├─────────────────────────────────────┤
│ [Stat 1] [Stat 2] [Stat 3] [Stat 4] │
├─────────────────────────────────────┤
│ ┌──────┐ ┌──────┐ ┌──────┐         │
│ │Proj 1│ │Proj 2│ │Proj 3│         │
│ │by Std│ │by Std│ │by Std│         │
│ └──────┘ └──────┘ └──────┘         │
└─────────────────────────────────────┘
```

**Elements:**
- Similar to student dashboard
- Shows all student projects
- Student name on each card
- Review button instead of edit/delete

---

### 5. Project Modal (Create/Edit)

**Layout:**
```
┌─────────────────────────────────────┐
│ Add New Project              [X]    │
├─────────────────────────────────────┤
│                                     │
│ Project Title                       │
│ [Input Field]                       │
│                                     │
│ Description                         │
│ [Textarea]                          │
│                                     │
│ Status                              │
│ [Dropdown]                          │
│                                     │
│ Progress (50%)                      │
│ [Slider]                            │
│                                     │
│ Milestones                          │
│ [Milestone 1] [X]                   │
│ [Milestone 2] [X]                   │
│ [+ Add Milestone]                   │
│                                     │
│ [Create Project Button]             │
│                                     │
└─────────────────────────────────────┘
```

---

### 6. View Project Modal

**Layout:**
```
┌─────────────────────────────────────┐
│ Project Title                [X]    │
├─────────────────────────────────────┤
│                                     │
│ Description                         │
│ [Project description text...]       │
│                                     │
│ Status: [Badge]                     │
│                                     │
│ Progress                            │
│ [Progress Bar] 65%                  │
│                                     │
│ Milestones                          │
│ ✓ Milestone 1                       │
│ ✓ Milestone 2                       │
│                                     │
│ Feedback                            │
│ ┌─────────────────────────────┐    │
│ │ Teacher Name    Date        │    │
│ │ Feedback text...            │    │
│ └─────────────────────────────┘    │
│                                     │
└─────────────────────────────────────┘
```

---

## 🔄 User Flow Diagrams

### Student Flow
```
Landing Page
    ↓
Register/Login
    ↓
Student Dashboard
    ↓
├─→ Add Project → Fill Form → Save
├─→ Edit Project → Update Form → Save
├─→ View Project → See Details & Feedback
└─→ Delete Project → Confirm → Remove
```

### Admin Flow
```
Landing Page
    ↓
Login (Admin)
    ↓
Admin Dashboard
    ↓
View All Projects
    ↓
Select Project
    ↓
View Details
    ↓
Provide Feedback → Submit
```

---

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
  - Single column layout
  - Stacked navigation
  - Full-width cards
  
- **Tablet**: 768px - 1024px
  - 2 column grid
  - Adjusted spacing
  
- **Desktop**: > 1024px
  - Multi-column grid
  - Full features visible
  - Optimal spacing

---

## 🎭 Animations & Interactions

### Hover Effects
- Buttons: Transform translateY(-2px) + shadow
- Cards: Transform translateY(-5px) + enhanced shadow
- Links: Color change

### Transitions
- All: 0.3s ease
- Smooth page transitions
- Modal fade in/out

### Loading States
- Button loading spinner
- Skeleton screens for cards
- Progress indicators

---

## 🛠️ Prototype Tools Recommendations

### Figma (Recommended)
**Pros:**
- Free for individuals
- Real-time collaboration
- Component libraries
- Interactive prototypes
- Developer handoff

**Steps:**
1. Create frames for each screen
2. Design components (buttons, cards, forms)
3. Add interactions and transitions
4. Create prototype flow
5. Share link for review

### Adobe XD
**Pros:**
- Professional tool
- Repeat grid feature
- Voice prototyping
- Auto-animate

### Canva
**Pros:**
- Easiest to use
- Templates available
- Quick mockups
- Free tier

---

## 📋 Prototype Checklist

- [ ] All 6 main screens designed
- [ ] Consistent color palette applied
- [ ] Typography hierarchy clear
- [ ] Interactive elements clickable
- [ ] Navigation flow working
- [ ] Mobile responsive views
- [ ] Hover states defined
- [ ] Loading states shown
- [ ] Error states designed
- [ ] Empty states included

---

## 🎨 Design Assets

### Icons
- Source: Lucide React
- Style: Outline
- Size: 16px, 20px, 24px, 28px, 48px, 64px

### Images
- Project placeholders: Gradient backgrounds
- User avatars: Initials or icons
- Empty states: Emoji or illustrations

---

## 📊 Accessibility Guidelines

- **Color Contrast**: Minimum 4.5:1 ratio
- **Font Size**: Minimum 16px for body text
- **Touch Targets**: Minimum 44x44px
- **Focus States**: Visible outline on all interactive elements
- **Alt Text**: All images have descriptive alt text
- **Keyboard Navigation**: All features accessible via keyboard

---

## 🎯 Key Screens to Prototype

1. **Landing Page** - First impression
2. **Login** - Authentication
3. **Student Dashboard** - Main student interface
4. **Add Project Modal** - Project creation
5. **View Project** - Project details
6. **Admin Dashboard** - Teacher interface

---

## 📱 Prototype Deliverables

1. **Figma/XD File** with all screens
2. **Interactive Prototype Link**
3. **Design Specifications Document** (this file)
4. **User Flow Diagrams**
5. **Component Library**
6. **Mobile Responsive Views**

---

## 🚀 Implementation Notes

The actual React implementation follows this design system exactly:
- All colors match the palette
- Typography uses Inter font
- Spacing follows 8px grid
- Components match specifications
- Animations as described
- Fully responsive

---

**Design System Version**: 1.0
**Last Updated**: 2024
**Designer**: PortfolioHub Team
