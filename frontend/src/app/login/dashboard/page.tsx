import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Activity,
  CalendarCheck,
  Brain,
  LineChart,
  BookOpen,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {/* Wellness Score */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="text-blue-500" /> Wellness Score
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={78} />
          <p className="text-sm mt-2">You're doing great! Keep it up 💪</p>
        </CardContent>
      </Card>

      {/* Mood Tracker */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LineChart className="text-pink-500" /> Mood Tracker
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Mood trend over last 7 days</p>
          <div className="h-40 bg-muted rounded mt-2 flex items-center justify-center">
            (Insert Chart Here)
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Sessions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarCheck className="text-green-600" /> Upcoming Sessions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-sm space-y-1">
            <li>📅 8th Apr - Therapy with Dr. Meera (5 PM)</li>
            <li>📅 12th Apr - Group Mindfulness Workshop (3 PM)</li>
          </ul>
        </CardContent>
      </Card>

      {/* Daily Wellness Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="text-yellow-600" /> Daily Wellness Tip
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm italic">
            "Take 10 minutes to write 3 things you're grateful for today."
          </p>
        </CardContent>
      </Card>

      {/* Calendar */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarCheck className="text-purple-600" /> Your Calendar
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar mode="single" selected={new Date()} className="rounded-md border" />
        </CardContent>
      </Card>

      {/* Tabs: Resources & Tools */}
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="text-cyan-600" /> Resources & Tools
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="resources">
            <TabsList>
              <TabsTrigger value="resources">Self-Learning</TabsTrigger>
              <TabsTrigger value="activities">Daily Activities</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
            </TabsList>
            <TabsContent value="resources">
              <ul className="text-sm mt-2 space-y-1">
                <li>🎧 Meditation Audio - Stress Buster (10 mins)</li>
                <li>📘 Read: Understanding Anxiety (3 min read)</li>
                <li>🎥 Watch: Breathing Techniques</li>
              </ul>
            </TabsContent>
            <TabsContent value="activities">
              <ul className="text-sm mt-2 space-y-1">
                <li>🧘 5-Minute Mindfulness Challenge</li>
                <li>✍️ Write your Emotion Diary</li>
                <li>🎮 Gratitude Card Game</li>
              </ul>
            </TabsContent>
            <TabsContent value="community">
              <ul className="text-sm mt-2 space-y-1">
                <li>💬 Join: Teen Talk Circle (Wed 6 PM)</li>
                <li>💬 Group: Employee Burnout Support</li>
                <li>💬 Kids’ Calm Corner</li>
              </ul>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
