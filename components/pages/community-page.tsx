"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Heart, MessageCircle, Share2, Send, Trophy, Target, Flame } from "lucide-react"

type Post = {
  id: string
  author: string
  initials: string
  time: string
  content: string
  likes: number
  comments: number
  isLiked: boolean
}

export function CommunityPage() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      author: "Sarah Williams",
      initials: "SW",
      time: "2 hours ago",
      content:
        "Just completed my 100th workout this year! Feeling stronger than ever. Thanks to all the amazing trainers at APEX!",
      likes: 24,
      comments: 8,
      isLiked: false,
    },
    {
      id: "2",
      author: "Mike Johnson",
      initials: "MJ",
      time: "5 hours ago",
      content: "New PR on deadlifts today - 405lbs! The journey continues. Who's joining me for leg day tomorrow?",
      likes: 42,
      comments: 15,
      isLiked: true,
    },
    {
      id: "3",
      author: "Emma Davis",
      initials: "ED",
      time: "1 day ago",
      content: "Loving the new yoga classes! Perfect way to recover after intense training sessions.",
      likes: 18,
      comments: 5,
      isLiked: false,
    },
  ])

  const [newPost, setNewPost] = useState("")

  const handleLike = (id: string) => {
    setPosts(
      posts.map((p) =>
        p.id === id
          ? {
              ...p,
              isLiked: !p.isLiked,
              likes: p.isLiked ? p.likes - 1 : p.likes + 1,
            }
          : p,
      ),
    )
  }

  const handlePost = () => {
    if (!newPost.trim()) return

    const post: Post = {
      id: Date.now().toString(),
      author: "John Doe",
      initials: "JD",
      time: "Just now",
      content: newPost,
      likes: 0,
      comments: 0,
      isLiked: false,
    }

    setPosts([post, ...posts])
    setNewPost("")
  }

  return (
    <div className="p-4 md:p-8 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">Community</h1>
        <p className="text-muted-foreground">Connect with fellow members and share your journey</p>
      </div>

      {/* Leaderboard Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-yellow-500" />
            </div>
            <div>
              <p className="text-lg font-bold">#12</p>
              <p className="text-xs text-muted-foreground">Monthly Rank</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-lg font-bold">850</p>
              <p className="text-xs text-muted-foreground">XP Points</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
              <Flame className="w-5 h-5 text-destructive" />
            </div>
            <div>
              <p className="text-lg font-bold">12</p>
              <p className="text-xs text-muted-foreground">Day Streak</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Create Post */}
      <Card className="p-4">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Avatar className="w-10 h-10 border-2 border-primary">
              <AvatarFallback className="bg-primary/10 text-primary">JD</AvatarFallback>
            </Avatar>
            <Textarea
              placeholder="Share your fitness journey..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="flex-1 min-h-[80px]"
            />
          </div>
          <div className="flex justify-end">
            <Button onClick={handlePost} disabled={!newPost.trim()}>
              <Send className="w-4 h-4 mr-2" />
              Post
            </Button>
          </div>
        </div>
      </Card>

      {/* Feed */}
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id} className="p-6">
            <div className="space-y-4">
              {/* Post Header */}
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10 border-2 border-primary">
                  <AvatarFallback className="bg-primary/10 text-primary">{post.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-semibold">{post.author}</p>
                  <p className="text-xs text-muted-foreground">{post.time}</p>
                </div>
              </div>

              {/* Post Content */}
              <p className="text-sm leading-relaxed">{post.content}</p>

              {/* Post Actions */}
              <div className="flex items-center gap-6 pt-2 border-t border-border">
                <button
                  onClick={() => handleLike(post.id)}
                  className={`flex items-center gap-2 text-sm transition-colors ${
                    post.isLiked ? "text-destructive" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Heart className={`w-5 h-5 ${post.isLiked ? "fill-destructive" : ""}`} />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors ml-auto">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
